
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Archmage
//
// 1/1.25/1.5 travel
// 250/280/310 chase
//===========================================================================
const Trig_Archmage_Func003Func001Func001Func003002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Archmage_Func003Func001Func001Func004Func002002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Archmage_Func003Func001Func001Func004Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func028C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func029Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func029C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func028C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func029Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func029C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) < 97 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func006Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func006C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func028C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func029Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func029C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 97 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func001C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 98 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func005Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func005Func026Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005Func005Func026C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004Func005C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 99 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001Func004C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 7 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetRandomInt( 1, 5 ) < 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func002Func001Func001C = (): boolean => {


	if ( ( ! ( GetRandomInt( 1, 7 ) < 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func002Func001C = (): boolean => {


	if ( ( ! ( GetRandomInt( 1, 10 ) < 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001Func002C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 5 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 100 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Archmage_Func003A = (): void => {


	if ( ( Trig_Archmage_Func003Func001C() ) ) {


		if ( ( Trig_Archmage_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1600, udg_TempPoint2, Condition( Trig_Archmage_Func003Func001Func001Func003002003 ) );

			if ( ( Trig_Archmage_Func003Func001Func001Func004C() ) ) {

				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )

				if ( ( Trig_Archmage_Func003Func001Func001Func004Func005C() ) ) {

					SetUnitManaPercentBJ( GetEnumUnit(), 0 )
					SetUnitLifePercentBJ( GetEnumUnit(), 100 )
					udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 2;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 700, ( AngleBetweenPoints( udg_TempPoint2, udg_TempPoint ) + ( ( I2R( ( GetForLoopIndexA() - 1 ) ) * 90 ) - 45 ) ) );
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = GetUnitLoc( GetEnumUnit() );
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.54 )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = false;
						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 3;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Other\\CrushingWave\\CrushingWaveDamage.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 120;
						udg_ExplodeRadius[ udg_Index ] = 120;
						udg_Damage[ udg_Index ] = 500;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 2;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func005Func025C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}


						if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func005Func026C() ) ) {

							udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.8 );

						} else {


							if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func005Func026Func001C() ) ) {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1 );

							} else {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.66 );

							}


						}

						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 0;
						udg_HorizontalArc[ udg_Index ] = ( Pow( - 1, I2R( GetForLoopIndexA() ) ) * - 250 );
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\WaterElementalMissile\\WaterElementalMissile.mdl";
						AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
						udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
						udg_MissileSize[ udg_Index ] = 200;
						SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
						SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
						udg_TerrainReaction[ udg_Index ] = 0;
						udg_TreeReaction[ udg_Index ] = 0;
						udg_BoundaryReaction[ udg_Index ] = 1;
						udg_BuildingReaction[ udg_Index ] = 0;
						RemoveLocation( udg_TempPoint3 )
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}


					RemoveLocation( udg_TempPoint )

				} else {


					if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001C() ) ) {

						SetUnitManaPercentBJ( GetEnumUnit(), 0 )
						SetUnitLifePercentBJ( GetEnumUnit(), 100 )
						udg_HomingUnit = GroupPickRandomUnit( udg_TempGroup2 );
						udg_TempPoint = GetUnitLoc( udg_HomingUnit );
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = GetUnitLoc( GetEnumUnit() );
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.55 )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = false;
						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = 1000;
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 1;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Items\\AIfb\\AIfbSpecialArt.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 100;
						udg_ExplodeRadius[ udg_Index ] = udg_CollisionRadius[ udg_Index ];
						udg_Damage[ udg_Index ] = 500;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 1;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func028C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}


						if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func029C() ) ) {

							udg_Speed[ udg_Index ] = 775;
							udg_MissileSize[ udg_Index ] = 185;

						} else {


							if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func029Func001C() ) ) {

								udg_Speed[ udg_Index ] = 850;
								udg_MissileSize[ udg_Index ] = 200;

							} else {

								udg_Speed[ udg_Index ] = 700;
								udg_MissileSize[ udg_Index ] = 170;

							}


						}

						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 0;
						udg_HorizontalArc[ udg_Index ] = 0;
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\FireBallMissile\\FireBallMissile.mdl";
						AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
						udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
						SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
						SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
						udg_TerrainReaction[ udg_Index ] = 0;
						udg_TreeReaction[ udg_Index ] = 2;
						udg_BoundaryReaction[ udg_Index ] = 2;
						udg_BuildingReaction[ udg_Index ] = 3;
						RemoveLocation( udg_TempPoint )

					} else {


						if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043C() ) ) {

							SetUnitManaPercentBJ( GetEnumUnit(), 0 )
							SetUnitLifePercentBJ( GetEnumUnit(), 100 )
							udg_TempUnit = GroupPickRandomUnit( udg_TempGroup2 );
							udg_TempPoint = GetUnitLoc( udg_TempUnit );

							if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func006C() ) ) {

								udg_TempInt = 4;

							} else {


								if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func006Func001C() ) ) {

									udg_TempInt = 5;

								} else {

									udg_TempInt = 3;

								}


							}

							bj_forLoopAIndex = 1;
							bj_forLoopAIndexEnd = udg_TempInt;

							while ( true ) {

								if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
								udg_TempPoint4 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( udg_TempUnit ) );
								udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint4, GetRandomReal( 0, 600 ), GetRandomDirectionDeg() );
								AddSpecialEffectLocBJ( udg_TempPoint3, "Abilities\\Weapons\\FrostWyrmMissile\\FrostWyrmMissile.mdl" )
								DestroyEffectBJ( GetLastCreatedEffectBJ() )
								TriggerExecute( gg_trg_Reset )
								udg_StartPoint[ udg_Index ] = GetUnitLoc( GetEnumUnit() );
								udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
								CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
								SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.56 )
								UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
								udg_Missile[ udg_Index ] = GetLastCreatedUnit();
								udg_DamageSource[ udg_Index ] = GetEnumUnit();
								udg_Jump[ udg_Index ] = false;
								udg_Teleportation[ udg_Index ] = 0;
								udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
								udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
								udg_DamageMethod[ udg_Index ] = 0;
								udg_ExplodeRadius[ udg_Index ] = 200;
								udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl";
								udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
								udg_CollisionRadius[ udg_Index ] = 0;
								udg_Damage[ udg_Index ] = 500;
								udg_Targets[ udg_Index ] = 1;
								udg_TargetsAdvanced[ udg_Index ] = 2;
								udg_Drag[ udg_Index ] = false;
								udg_Link[ udg_Index ] = false;
								udg_Lightning[ udg_Index ] = false;

								if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func028C() ) ) {

									AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
									udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

								} else {

								null

								}


								if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func029C() ) ) {

									udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.8 );

								} else {


									if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func007Func029Func001C() ) ) {

										udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.91 );

									} else {

										udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.69 );

									}


								}

								udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
								udg_VerticalArc[ udg_Index ] = 300;
								udg_HorizontalArc[ udg_Index ] = 0;
								udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Undead\\FreezingBreath\\FreezingBreathMissile.mdl";
								AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
								udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
								udg_MissileSize[ udg_Index ] = 100;
								SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
								SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
								udg_TerrainReaction[ udg_Index ] = 0;
								udg_TreeReaction[ udg_Index ] = 0;
								udg_BoundaryReaction[ udg_Index ] = 1;
								udg_BuildingReaction[ udg_Index ] = 0;
								RemoveLocation( udg_TempPoint3 )
								RemoveLocation( udg_TempPoint4 )
								bj_forLoopAIndex = bj_forLoopAIndex + 1;

							}


							RemoveLocation( udg_TempPoint )

						} else {


							if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001C() ) ) {

								SetUnitLifePercentBJ( GetEnumUnit(), 100 )
								SetUnitManaPercentBJ( GetEnumUnit(), 0 )
								udg_TempInt = CountUnitsInGroup( udg_TempGroup2 );
								bj_forLoopBIndex = 1;
								bj_forLoopBIndexEnd = udg_TempInt;

								while ( true ) {

									if ( bj_forLoopBIndex > bj_forLoopBIndexEnd ) break;
									udg_TempUnit = GroupPickRandomUnit( udg_TempGroup2 );
									GroupRemoveUnitSimple( udg_TempUnit, udg_TempGroup2 )
									udg_TempPoint = GetUnitLoc( udg_TempUnit );
									TriggerExecute( gg_trg_Reset )
									udg_StartPoint[ udg_Index ] = GetUnitLoc( GetEnumUnit() );
									udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 600, AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint ) );
									udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
									CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
									SetUnitTurnSpeedBJ( GetLastCreatedUnit(), 0.57 )
									UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
									udg_Missile[ udg_Index ] = GetLastCreatedUnit();
									udg_DamageSource[ udg_Index ] = udg_TempUnit;
									udg_Jump[ udg_Index ] = false;
									udg_Teleportation[ udg_Index ] = 0;
									udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
									udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
									udg_DamageMethod[ udg_Index ] = 3;
									udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
									udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
									udg_CollisionRadius[ udg_Index ] = 120;
									udg_ExplodeRadius[ udg_Index ] = udg_CollisionRadius[ udg_Index ];
									udg_Damage[ udg_Index ] = 500;
									udg_Targets[ udg_Index ] = 2;
									udg_TargetsAdvanced[ udg_Index ] = 1;
									udg_Drag[ udg_Index ] = false;
									udg_Link[ udg_Index ] = false;
									udg_Lightning[ udg_Index ] = false;

									if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func028C() ) ) {

										AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
										udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

									} else {

									null

									}


									if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func029C() ) ) {

										udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.8 );
										UnitApplyTimedLifeBJ( 6, FourCC( "BTLF" ), udg_Missile[ udg_Index ] )

									} else {


										if ( ( Trig_Archmage_Func003Func001Func001Func004Func005Func001Func043Func001Func004Func029Func001C() ) ) {

											udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1 );
											UnitApplyTimedLifeBJ( 7, FourCC( "BTLF" ), udg_Missile[ udg_Index ] )

										} else {

											udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.67 );
											UnitApplyTimedLifeBJ( 5, FourCC( "BTLF" ), udg_Missile[ udg_Index ] )

										}


									}

									udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
									udg_VerticalArc[ udg_Index ] = 600;
									udg_HorizontalArc[ udg_Index ] = 0;
									udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\AncientProtectorMissile\\AncientProtectorMissile.mdl";
									AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
									udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
									udg_MissileSize[ udg_Index ] = 300;
									SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
									SetUnitVertexColorBJ( GetLastCreatedUnit(), 50, 50, 50, 0 )
									udg_TerrainReaction[ udg_Index ] = 0;
									udg_TreeReaction[ udg_Index ] = 0;
									udg_BoundaryReaction[ udg_Index ] = 0;
									udg_BuildingReaction[ udg_Index ] = 0;
									udg_AfterDestination[ udg_Index ] = 5;
									RemoveLocation( udg_TempPoint )
									RemoveLocation( udg_TempPoint3 )
									bj_forLoopBIndex = bj_forLoopBIndex + 1;

								}



							} else {

							null

							}


						}


					}


				}


			} else {

				DestroyGroup( udg_TempGroup2 )
				udg_TempGroup2 = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Archmage_Func003Func001Func001Func004Func002002002 ) );

				if ( ( Trig_Archmage_Func003Func001Func001Func004Func003C() ) ) {

					SetUnitManaPercentBJ( GetEnumUnit(), 15 )
					SetUnitLifePercentBJ( GetEnumUnit(), 100 )
					udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
					CreateNUnitsAtLoc( 1, FourCC( "h00G" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
					UnitApplyTimedLifeBJ( 1.25, FourCC( "BTLF" ), GetLastCreatedUnit() )
					RemoveLocation( udg_TempPoint )
					DestroyGroup( udg_TempUnitGroup )

				} else {

					SetUnitLifePercentBJ( GetEnumUnit(), 100 )

				}


			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {

		null

		}


		if ( ( Trig_Archmage_Func003Func001Func002C() ) ) {


			if ( ( Trig_Archmage_Func003Func001Func002Func001C() ) ) {

				SetUnitLifePercentBJ( GetEnumUnit(), 99 )
				CreateTextTagUnitBJ( "TRIGSTR_929", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
				SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
				SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
				SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
				SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

			} else {


				if ( ( Trig_Archmage_Func003Func001Func002Func001Func001C() ) ) {

					SetUnitLifePercentBJ( GetEnumUnit(), 98 )
					CreateTextTagUnitBJ( "TRIGSTR_928", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
					SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
					SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
					SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
					SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

				} else {


					if ( ( Trig_Archmage_Func003Func001Func002Func001Func001Func001C() ) ) {

						SetUnitLifePercentBJ( GetEnumUnit(), 97 )
						CreateTextTagUnitBJ( "TRIGSTR_991", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
						SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
						SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
						SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
						SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

					} else {

						SetUnitLifePercentBJ( GetEnumUnit(), 96 )
						CreateTextTagUnitBJ( "TRIGSTR_1008", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
						SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
						SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
						SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
						SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

					}


				}


			}


		} else {

		null

		}


	} else {

	null

	}


};


const Trig_Archmage_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00H" ) );
	ForGroupBJ( udg_TempGroup, Trig_Archmage_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Archmage = (): void => {

	gg_trg_Archmage = CreateTrigger();
	DisableTrigger( gg_trg_Archmage )
	TriggerRegisterTimerEventPeriodic( gg_trg_Archmage, 1 )
	TriggerAddAction( gg_trg_Archmage, Trig_Archmage_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Archmage();

} );
