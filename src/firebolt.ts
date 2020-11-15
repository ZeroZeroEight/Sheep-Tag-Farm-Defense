
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Firebolt
//===========================================================================
const Trig_Firebolt_Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Firebolt_Func034C = (): boolean => {


	if ( ( ! ( udg_MissileSize[ udg_Index ] <= 140 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Firebolt_Actions = (): void => {

	udg_TempPoint = GetUnitLoc( udg_HomingUnit );
	TriggerExecute( gg_trg_Reset )
	udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
	udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
	CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
	SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.55 )
	UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
	udg_Missile[ udg_Index ] = GetLastCreatedUnit();
	udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
	udg_Jump[ udg_Index ] = false;
	udg_Teleportation[ udg_Index ] = 0;
	udg_Distance[ udg_Index ] = 1000;
	udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
	udg_DamageMethod[ udg_Index ] = 1;
	udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Items\\AIfb\\AIfbSpecialArt.mdl";
	udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
	udg_CollisionRadius[ udg_Index ] = 100;
	udg_ExplodeRadius[ udg_Index ] = 100;
	udg_Damage[ udg_Index ] = 500;
	udg_Targets[ udg_Index ] = 1;
	udg_TargetsAdvanced[ udg_Index ] = 1;
	udg_Drag[ udg_Index ] = false;
	udg_Link[ udg_Index ] = false;
	udg_Lightning[ udg_Index ] = false;

	if ( ( Trig_Firebolt_Func025C() ) ) {

		AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
		udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

	} else {

	null

	}

	udg_Speed[ udg_Index ] = udg_Speed[ udg_LoopIndex ];
	udg_MissileSize[ udg_Index ] = ( udg_MissileSize[ udg_LoopIndex ] - 25 );
	udg_VerticalArc[ udg_Index ] = 0;
	udg_HorizontalArc[ udg_Index ] = 0;
	udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\FireBallMissile\\FireBallMissile.mdl";
	AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
	udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
	SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )

	if ( ( Trig_Firebolt_Func034C() ) ) {

		SetUnitVertexColorBJ( GetLastCreatedUnit(), 0, 100, 100, 0 )

	} else {

	null

	}

	udg_TerrainReaction[ udg_Index ] = 0;
	udg_TreeReaction[ udg_Index ] = 2;
	udg_BoundaryReaction[ udg_Index ] = 2;
	udg_BuildingReaction[ udg_Index ] = 3;
	RemoveLocation( udg_TempPoint )

};


//===========================================================================
const InitTrig_Firebolt = (): void => {

	gg_trg_Firebolt = CreateTrigger();
	TriggerAddAction( gg_trg_Firebolt, Trig_Firebolt_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Firebolt();

} );
