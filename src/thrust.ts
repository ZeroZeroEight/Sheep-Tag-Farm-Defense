
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Thrust
//===========================================================================
const Trig_Thrust_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 9 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Thrust_Func003Func001Func001Func005Func002002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Thrust_Func003Func001Func001Func005Func003Func003Func009C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005Func003Func003Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005Func032C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005Func033Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I01F" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005Func033C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I01E" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001Func005C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Func003A = (): void => {


	if ( ( Trig_Thrust_Func003Func001C() ) ) {


		if ( ( Trig_Thrust_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1000, udg_TempPoint2, Condition( Trig_Thrust_Func003Func001Func001Func004002003 ) );

			if ( ( Trig_Thrust_Func003Func001Func001Func005C() ) ) {

				udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
				SetUnitManaPercentBJ( GetEnumUnit(), 0 )
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
				udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
				SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
				udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.02 )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = GetEnumUnit();
				udg_Jump[ udg_Index ] = true;
				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = ( DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint ) * 0.7 );
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 2;
				udg_ExplodeRadius[ udg_Index ] = 0;
				udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 100;
				udg_Damage[ udg_Index ] = 500;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 0;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Thrust_Func003Func001Func001Func005Func032C() ) ) {

					AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}


				if ( ( Trig_Thrust_Func003Func001Func001Func005Func033C() ) ) {

					udg_Speed[ udg_Index ] = 800;

				} else {


					if ( ( Trig_Thrust_Func003Func001Func001Func005Func033Func001C() ) ) {

						udg_Speed[ udg_Index ] = 700;

					} else {

						udg_Speed[ udg_Index ] = 650;

					}


				}

				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 0;
				udg_HorizontalArc[ udg_Index ] = 0;
				udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\FireBallMissile\\FireBallMissile.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 170;
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

				DestroyGroup( udg_TempGroup2 )
				udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 2500, udg_TempPoint2, Condition( Trig_Thrust_Func003Func001Func001Func005Func002002003 ) );

				if ( ( Trig_Thrust_Func003Func001Func001Func005Func003C() ) ) {

					SetUnitManaPercentBJ( GetEnumUnit(), 0 )
					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 12;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
						udg_Angle[ udg_Index ] = ( I2R( GetForLoopIndexA() ) * 30 );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
						udg_Jump[ udg_Index ] = false;

						if ( ( Trig_Thrust_Func003Func001Func001Func005Func003Func003Func009C() ) ) {

							UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

						} else {

						null

						}

						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = 1400;
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 3;
						udg_ExplodeRadius[ udg_Index ] = 120;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 100;
						udg_Damage[ udg_Index ] = 1000;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 0;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Thrust_Func003Func001Func001Func005Func003Func003Func024C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}

						udg_Speed[ udg_Index ] = 1400;
						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 0;
						udg_HorizontalArc[ udg_Index ] = 0;
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
						AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
						udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
						udg_MissileSize[ udg_Index ] = 100;
						SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
						SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
						udg_TerrainReaction[ udg_Index ] = 0;
						udg_TreeReaction[ udg_Index ] = 0;
						udg_BoundaryReaction[ udg_Index ] = 2;
						udg_BuildingReaction[ udg_Index ] = 0;
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}



				} else {

				null

				}


			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {


			if ( ( Trig_Thrust_Func003Func001Func001Func001C() ) ) {

				SetUnitManaBJ( GetEnumUnit(), 15 )
				CreateTextTagUnitBJ( "TRIGSTR_611", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
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


const Trig_Thrust_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00F" ) );
	ForGroupBJ( udg_TempGroup, Trig_Thrust_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Thrust = (): void => {

	gg_trg_Thrust = CreateTrigger();
	DisableTrigger( gg_trg_Thrust )
	TriggerRegisterTimerEventPeriodic( gg_trg_Thrust, 1 )
	TriggerAddAction( gg_trg_Thrust, Trig_Thrust_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Thrust();

} );
