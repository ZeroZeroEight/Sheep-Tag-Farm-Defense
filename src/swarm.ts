

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Swarm
//===========================================================================
const Trig_Swarm_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001Func003Func001002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Swarm_Func003Func001Func003Func002Func017C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001Func003Func002Func032C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001Func003Func002C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001Func003C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 12 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Swarm_Func003A = (): void => {


	if ( ( Trig_Swarm_Func003Func001C() ) ) {


		if ( ( Trig_Swarm_Func003Func001Func001C() ) ) {

			udg_TempInt = 4;

		} else {


			if ( ( Trig_Swarm_Func003Func001Func001Func001C() ) ) {

				udg_TempInt = 5;

			} else {

				udg_TempInt = 3;

			}


		}

		udg_TempPoint = GetUnitLoc( GetEnumUnit() );

		if ( ( Trig_Swarm_Func003Func001Func003C() ) ) {

			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 2000, udg_TempPoint, Condition( Trig_Swarm_Func003Func001Func003Func001002003 ) );

			if ( ( Trig_Swarm_Func003Func001Func003Func002C() ) ) {

				udg_TempPoint2 = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
				udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, GetRandomReal( 50, 350 ), GetRandomDirectionDeg() );
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
				SetUnitManaBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) - 100 ) )
				AddSpecialEffectLocBJ( udg_TempPoint3, "Abilities\\Spells\\Undead\\AnimateDead\\AnimateDeadTarget.mdl" )
				DestroyEffectBJ( GetLastCreatedEffectBJ() )
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint, 1, 1 );
				udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_TempPoint, udg_TempPoint3 );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = GetEnumUnit();
				udg_Jump[ udg_Index ] = false;

				if ( ( Trig_Swarm_Func003Func001Func003Func002Func017C() ) ) {

					UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

				} else {

				null

				}

				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = ( DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 ) + 0 );
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 0;
				udg_ExplodeRadius[ udg_Index ] = 140;
				udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Undead\\AnimateDead\\AnimateDeadTarget.mdl";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 0;
				udg_Damage[ udg_Index ] = 1000;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 2;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Swarm_Func003Func001Func003Func002Func032C() ) ) {

					AddLightningLoc( "DRAL", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}

				udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * ( 1.1 + ( 0.1 * I2R( udg_TempInt ) ) ) );
				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 400;
				udg_HorizontalArc[ udg_Index ] = I2R( udg_TempInt );
				udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Undead\\CarrionSwarm\\CarrionSwarmMissile.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 100;
				SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
				SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
				SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.63 )
				udg_TerrainReaction[ udg_Index ] = 0;
				udg_TreeReaction[ udg_Index ] = 0;
				udg_BoundaryReaction[ udg_Index ] = 2;
				udg_BuildingReaction[ udg_Index ] = 0;
				RemoveLocation( udg_TempPoint2 )
				RemoveLocation( udg_TempPoint3 )

			} else {

				SetUnitManaBJ( GetEnumUnit(), 0 )
				bj_forLoopAIndex = 1;
				bj_forLoopAIndexEnd = 4;

				while ( true ) {

					if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
					udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, GetRandomReal( 50, 400 ), GetRandomDirectionDeg() );
					CreateNUnitsAtLoc( 1, FourCC( "n00A" ), GetOwningPlayer( GetEnumUnit() ), udg_TempPoint2, bj_UNIT_FACING )
					UnitApplyTimedLifeBJ( 24, FourCC( "BTLF" ), GetLastCreatedUnit() )
					AddSpecialEffectLocBJ( udg_TempPoint2, "Abilities\\Spells\\Undead\\AnimateDead\\AnimateDeadTarget.mdl" )
					RemoveLocation( udg_TempPoint2 )
					bj_forLoopAIndex = bj_forLoopAIndex + 1;

				}



			}

			DestroyGroup( udg_TempGroup2 )

		} else {

		null

		}

		RemoveLocation( udg_TempPoint )

	} else {

	null

	}


};


const Trig_Swarm_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00I" ) );
	ForGroupBJ( udg_TempGroup, Trig_Swarm_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Swarm = (): void => {

	gg_trg_Swarm = CreateTrigger();
	DisableTrigger( gg_trg_Swarm )
	TriggerRegisterTimerEventPeriodic( gg_trg_Swarm, 1 )
	TriggerAddAction( gg_trg_Swarm, Trig_Swarm_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Swarm();

} );
