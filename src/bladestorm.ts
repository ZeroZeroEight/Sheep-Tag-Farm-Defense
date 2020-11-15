
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Bladestorm
//
// 275 325 375 speed
//===========================================================================
const Trig_Bladestorm_Func001Func002Func001Func002C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Func001Func002Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Func001Func002Func002Func011C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Func001Func002Func002Func026C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Func001Func002A = (): void => {


	if ( ( Trig_Bladestorm_Func001Func002Func001C() ) ) {

		udg_TempInt = 2;

	} else {


		if ( ( Trig_Bladestorm_Func001Func002Func001Func002C() ) ) {

			udg_TempInt = 3;

		} else {

			udg_TempInt = 1;

		}


	}

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = udg_TempInt;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		TriggerExecute( gg_trg_Reset )
		udg_StartPoint[ udg_Index ] = GetUnitLoc( GetEnumUnit() );
		SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
		udg_Angle[ udg_Index ] = GetRandomDirectionDeg();
		CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
		UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )
		UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
		udg_Missile[ udg_Index ] = GetLastCreatedUnit();
		udg_DamageSource[ udg_Index ] = GetEnumUnit();
		udg_Jump[ udg_Index ] = false;

		if ( ( Trig_Bladestorm_Func001Func002Func002Func011C() ) ) {

			UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
			UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

		} else {

		null

		}

		udg_Teleportation[ udg_Index ] = 0;
		udg_Distance[ udg_Index ] = 1000;
		udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
		udg_DamageMethod[ udg_Index ] = 2;
		udg_ExplodeRadius[ udg_Index ] = 0;
		udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\FlakCannons\\FlakTarget.mdl";
		udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
		udg_CollisionRadius[ udg_Index ] = 90;
		udg_Damage[ udg_Index ] = 500;
		udg_Targets[ udg_Index ] = 1;
		udg_TargetsAdvanced[ udg_Index ] = 2;
		udg_Drag[ udg_Index ] = true;
		udg_Link[ udg_Index ] = false;
		udg_Lightning[ udg_Index ] = false;

		if ( ( Trig_Bladestorm_Func001Func002Func002Func026C() ) ) {

			AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
			udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

		} else {

		null

		}

		udg_Speed[ udg_Index ] = 650;
		udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
		udg_VerticalArc[ udg_Index ] = 0;
		udg_HorizontalArc[ udg_Index ] = 0;
		udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\SentinelMissile\\SentinelMissile.mdl";
		AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
		udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
		udg_MissileSize[ udg_Index ] = 150;
		SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
		SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
		udg_TerrainReaction[ udg_Index ] = 0;
		udg_TreeReaction[ udg_Index ] = 2;
		udg_BoundaryReaction[ udg_Index ] = 2;
		udg_BuildingReaction[ udg_Index ] = 3;
		udg_AfterDestination[ udg_Index ] = 5;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


const Trig_Bladestorm_Func001C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_BladeGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Actions = (): void => {


	if ( ( Trig_Bladestorm_Func001C() ) ) {

		ForGroupBJ( udg_BladeGroup, Trig_Bladestorm_Func001Func002A )

	} else {

		DisableTrigger( GetTriggeringTrigger() )

	}


};


//===========================================================================
const InitTrig_Bladestorm = (): void => {

	gg_trg_Bladestorm = CreateTrigger();
	DisableTrigger( gg_trg_Bladestorm )
	TriggerRegisterTimerEventPeriodic( gg_trg_Bladestorm, 1 )
	TriggerAddAction( gg_trg_Bladestorm, Trig_Bladestorm_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Bladestorm();

} );
