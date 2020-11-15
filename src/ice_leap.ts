
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Ice Leap
//===========================================================================
const Trig_Ice_Leap_Func003Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I004" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I006" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func002C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 14 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func005002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Ice_Leap_Func003Func001Func001Func006Func030C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func006Func031Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I006" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func006Func031C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I004" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001Func006C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Ice_Leap_Func003A = (): void => {


	if ( ( Trig_Ice_Leap_Func003Func001C() ) ) {


		if ( ( Trig_Ice_Leap_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1700, udg_TempPoint2, Condition( Trig_Ice_Leap_Func003Func001Func001Func005002003 ) );

			if ( ( Trig_Ice_Leap_Func003Func001Func001Func006C() ) ) {

				udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
				SetUnitManaPercentBJ( GetEnumUnit(), 0 )
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
				udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
				udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( GroupPickRandomUnit( udg_TempUnitGroup ) ) );
				SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint3, 0 )
				udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.5 )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = GetEnumUnit();
				udg_Jump[ udg_Index ] = true;
				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 0;
				udg_ExplodeRadius[ udg_Index ] = 185;
				udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 0;
				udg_Damage[ udg_Index ] = 500;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 0;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Ice_Leap_Func003Func001Func001Func006Func030C() ) ) {

					AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}


				if ( ( Trig_Ice_Leap_Func003Func001Func001Func006Func031C() ) ) {

					udg_Speed[ udg_Index ] = 1020;

				} else {


					if ( ( Trig_Ice_Leap_Func003Func001Func001Func006Func031Func001C() ) ) {

						udg_Speed[ udg_Index ] = 935;

					} else {

						udg_Speed[ udg_Index ] = 850;

					}


				}

				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 300;
				udg_HorizontalArc[ udg_Index ] = 0;
				udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Undead\\FreezingBreath\\FreezingBreathMissile.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 150;
				SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
				SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
				udg_TerrainReaction[ udg_Index ] = 0;
				udg_TreeReaction[ udg_Index ] = 0;
				udg_BoundaryReaction[ udg_Index ] = 1;
				udg_BuildingReaction[ udg_Index ] = 0;
				RemoveLocation( udg_TempPoint )
				RemoveLocation( udg_TempPoint3 )
				DestroyGroup( udg_TempUnitGroup )

			} else {

			null

			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {


			if ( ( Trig_Ice_Leap_Func003Func001Func001Func001C() ) ) {

				SetUnitManaBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) + GetRandomReal( 0.72, 1.72 ) ) )

			} else {


				if ( ( Trig_Ice_Leap_Func003Func001Func001Func001Func001C() ) ) {

					SetUnitManaBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) + GetRandomReal( 1.06, 2.06 ) ) )

				} else {

					SetUnitManaBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) + GetRandomReal( 0.5, 1.5 ) ) )

				}


			}


			if ( ( Trig_Ice_Leap_Func003Func001Func001Func002C() ) ) {

				SetUnitManaBJ( GetEnumUnit(), 15 )
				CreateTextTagUnitBJ( "TRIGSTR_436", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
				SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
				SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
				SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
				SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

			} else {

			null

			}


		}


	} else {

	null

	}


};


const Trig_Ice_Leap_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E007" ) );
	ForGroupBJ( udg_TempGroup, Trig_Ice_Leap_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Ice_Leap = (): void => {

	gg_trg_Ice_Leap = CreateTrigger();
	DisableTrigger( gg_trg_Ice_Leap )
	TriggerRegisterTimerEventPeriodic( gg_trg_Ice_Leap, 1 )
	TriggerAddAction( gg_trg_Ice_Leap, Trig_Ice_Leap_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Ice_Leap();

} );
