

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Shuriken
//===========================================================================
const Trig_Shuriken_Func003Func001Func001Func003002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func001Func013C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func001Func028C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func003Func013C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func003Func028C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00S" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func003Func012C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003Func003Func027C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004Func003C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00R" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001Func004C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 8 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Shuriken_Func003A = (): void => {


	if ( ( Trig_Shuriken_Func003Func001C() ) ) {


		if ( ( Trig_Shuriken_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1000, udg_TempPoint2, Condition( Trig_Shuriken_Func003Func001Func001Func003002003 ) );

			if ( ( Trig_Shuriken_Func003Func001Func001Func004C() ) ) {

				SetUnitManaPercentBJ( GetEnumUnit(), 0 )
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )

				if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003C() ) ) {

					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 2;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
						udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
						SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = false;

						if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func003Func012C() ) ) {

							UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

						} else {

						null

						}

						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = 500;
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 2;
						udg_ExplodeRadius[ udg_Index ] = 0;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\FlakCannons\\FlakTarget.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 50;
						udg_Damage[ udg_Index ] = 120;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 2;
						udg_Drag[ udg_Index ] = true;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func003Func027C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}

						udg_Speed[ udg_Index ] = 1200;
						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 0;
						udg_HorizontalArc[ udg_Index ] = I2R( ( - 300 + ( GetForLoopIndexA() * 200 ) ) );
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\SentinelMissile\\SentinelMissile.mdl";
						AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
						udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
						udg_MissileSize[ udg_Index ] = 100;
						SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
						SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
						udg_TerrainReaction[ udg_Index ] = 2;
						udg_TreeReaction[ udg_Index ] = 2;
						udg_BoundaryReaction[ udg_Index ] = 2;
						udg_BuildingReaction[ udg_Index ] = 3;
						udg_AfterDestination[ udg_Index ] = 1;
						RemoveLocation( udg_TempPoint )
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}



				} else {


					if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func001C() ) ) {

						bj_forLoopAIndex = 1;
						bj_forLoopAIndexEnd = 3;

						while ( true ) {

							if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
							SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
							udg_Angle[ udg_Index ] = ( udg_Angle[ udg_Index ] + ( - 34 + I2R( ( 17 * GetForLoopIndexA() ) ) ) );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = false;

							if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func003Func013C() ) ) {

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
							udg_CollisionRadius[ udg_Index ] = 50;
							udg_Damage[ udg_Index ] = 120;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 2;
							udg_Drag[ udg_Index ] = true;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func003Func028C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}

							udg_Speed[ udg_Index ] = 1200;
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 0;
							udg_HorizontalArc[ udg_Index ] = 0;
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\SentinelMissile\\SentinelMissile.mdl";
							AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
							udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
							udg_MissileSize[ udg_Index ] = 100;
							SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
							SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
							udg_TerrainReaction[ udg_Index ] = 2;
							udg_TreeReaction[ udg_Index ] = 2;
							udg_BoundaryReaction[ udg_Index ] = 2;
							udg_BuildingReaction[ udg_Index ] = 3;
							udg_AfterDestination[ udg_Index ] = 5;
							RemoveLocation( udg_TempPoint )
							bj_forLoopAIndex = bj_forLoopAIndex + 1;

						}



					} else {

						bj_forLoopAIndex = 1;
						bj_forLoopAIndexEnd = 2;

						while ( true ) {

							if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
							SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
							udg_Angle[ udg_Index ] = ( udg_Angle[ udg_Index ] + I2R( ( - 30 + ( 20 * GetForLoopIndexA() ) ) ) );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = false;

							if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func001Func013C() ) ) {

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
							udg_CollisionRadius[ udg_Index ] = 50;
							udg_Damage[ udg_Index ] = 60;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 2;
							udg_Drag[ udg_Index ] = true;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Shuriken_Func003Func001Func001Func004Func003Func001Func001Func028C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}

							udg_Speed[ udg_Index ] = 1200;
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 0;
							udg_HorizontalArc[ udg_Index ] = 0;
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\SentinelMissile\\SentinelMissile.mdl";
							AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
							udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
							udg_MissileSize[ udg_Index ] = 100;
							SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
							SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
							udg_TerrainReaction[ udg_Index ] = 2;
							udg_TreeReaction[ udg_Index ] = 2;
							udg_BoundaryReaction[ udg_Index ] = 2;
							udg_BuildingReaction[ udg_Index ] = 3;
							udg_AfterDestination[ udg_Index ] = 5;
							RemoveLocation( udg_TempPoint )
							bj_forLoopAIndex = bj_forLoopAIndex + 1;

						}



					}


				}


			} else {

			null

			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {

		null

		}


	} else {

	null

	}


};


const Trig_Shuriken_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E006" ) );
	ForGroupBJ( udg_TempGroup, Trig_Shuriken_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Shuriken = (): void => {

	gg_trg_Shuriken = CreateTrigger();
	DisableTrigger( gg_trg_Shuriken )
	TriggerRegisterTimerEventPeriodic( gg_trg_Shuriken, 1 )
	TriggerAddAction( gg_trg_Shuriken, Trig_Shuriken_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Shuriken();

} );
