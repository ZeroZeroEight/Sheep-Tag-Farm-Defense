
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Goblin Rocket Spray
//===========================================================================
const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func003002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func001Func010C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func001Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func001Func010C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func001Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func002Func010C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func002Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00Y" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00Z" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 13 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Goblin_Rocket_Spray_Func003A = (): void => {


	if ( ( Trig_Goblin_Rocket_Spray_Func003Func001C() ) ) {


		if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1000, udg_TempPoint2, Condition( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func003002003 ) );

			if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004C() ) ) {

				SetUnitManaPercentBJ( GetEnumUnit(), 0 )
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
				udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup2 ) );
				SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )

				if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005C() ) ) {

					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 9;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
						udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, GetRandomReal( 0, 450 ), GetRandomDirectionDeg() );
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = false;

						if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func001Func010C() ) ) {

							UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

						} else {

						null

						}

						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 1;
						udg_ExplodeRadius[ udg_Index ] = 100;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Other\\Incinerate\\FireLordDeathExplode.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 50;
						udg_Damage[ udg_Index ] = 60;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 0;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func001Func025C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}

						udg_Speed[ udg_Index ] = GetRandomReal( 700, 1100 );
						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 0;
						udg_HorizontalArc[ udg_Index ] = GetRandomReal( - 300, 300 );
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
						AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
						udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
						udg_MissileSize[ udg_Index ] = 100;
						SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
						SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
						udg_TerrainReaction[ udg_Index ] = 0;
						udg_TreeReaction[ udg_Index ] = 1;
						udg_BoundaryReaction[ udg_Index ] = 1;
						udg_BuildingReaction[ udg_Index ] = 1;
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}



				} else {


					if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002C() ) ) {

						bj_forLoopAIndex = 1;
						bj_forLoopAIndexEnd = 12;

						while ( true ) {

							if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, GetRandomReal( 0, 300 ), GetRandomDirectionDeg() );
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = false;

							if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func002Func010C() ) ) {

								UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
								UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

							} else {

							null

							}

							udg_Teleportation[ udg_Index ] = 0;
							udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
							udg_DamageMethod[ udg_Index ] = 1;
							udg_ExplodeRadius[ udg_Index ] = 100;
							udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Other\\Incinerate\\FireLordDeathExplode.mdl";
							udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
							udg_CollisionRadius[ udg_Index ] = 50;
							udg_Damage[ udg_Index ] = 60;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 0;
							udg_Drag[ udg_Index ] = false;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func002Func025C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}

							udg_Speed[ udg_Index ] = GetRandomReal( 700, 1100 );
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 0;
							udg_HorizontalArc[ udg_Index ] = GetRandomReal( - 300, 300 );
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
							AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
							udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
							udg_MissileSize[ udg_Index ] = 100;
							SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
							SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
							udg_TerrainReaction[ udg_Index ] = 0;
							udg_TreeReaction[ udg_Index ] = 1;
							udg_BoundaryReaction[ udg_Index ] = 1;
							udg_BuildingReaction[ udg_Index ] = 1;
							bj_forLoopAIndex = bj_forLoopAIndex + 1;

						}



					} else {

						bj_forLoopAIndex = 1;
						bj_forLoopAIndexEnd = 6;

						while ( true ) {

							if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, GetRandomReal( 0, 300 ), GetRandomDirectionDeg() );
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = false;

							if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func001Func010C() ) ) {

								UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
								UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

							} else {

							null

							}

							udg_Teleportation[ udg_Index ] = 0;
							udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
							udg_DamageMethod[ udg_Index ] = 1;
							udg_ExplodeRadius[ udg_Index ] = 100;
							udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Other\\Incinerate\\FireLordDeathExplode.mdl";
							udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
							udg_CollisionRadius[ udg_Index ] = 50;
							udg_Damage[ udg_Index ] = 60;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 0;
							udg_Drag[ udg_Index ] = false;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Goblin_Rocket_Spray_Func003Func001Func001Func004Func005Func002Func001Func025C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}

							udg_Speed[ udg_Index ] = GetRandomReal( 700, 1100 );
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 0;
							udg_HorizontalArc[ udg_Index ] = GetRandomReal( - 300, 300 );
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
							AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
							udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
							udg_MissileSize[ udg_Index ] = 100;
							SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
							SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
							udg_TerrainReaction[ udg_Index ] = 0;
							udg_TreeReaction[ udg_Index ] = 1;
							udg_BoundaryReaction[ udg_Index ] = 1;
							udg_BuildingReaction[ udg_Index ] = 1;
							bj_forLoopAIndex = bj_forLoopAIndex + 1;

						}



					}


				}

				RemoveLocation( udg_TempPoint )

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


const Trig_Goblin_Rocket_Spray_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E009" ) );
	ForGroupBJ( udg_TempGroup, Trig_Goblin_Rocket_Spray_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Goblin_Rocket_Spray = (): void => {

	gg_trg_Goblin_Rocket_Spray = CreateTrigger();
	DisableTrigger( gg_trg_Goblin_Rocket_Spray )
	TriggerRegisterTimerEventPeriodic( gg_trg_Goblin_Rocket_Spray, 1 )
	TriggerAddAction( gg_trg_Goblin_Rocket_Spray, Trig_Goblin_Rocket_Spray_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Goblin_Rocket_Spray();

} );
