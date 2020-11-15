
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Axemaster
//===========================================================================
const Trig_Axemaster_Func003Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func002002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func035C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func036Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func036C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func034C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func035Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func035C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001Func005C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= I2R( udg_TempInt ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func002C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= ( I2R( udg_TempInt ) - 1 ) ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 100 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func003002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func002002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func035C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func036Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func036C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func004C = (): boolean => {


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) > 3 ) ) ) {

		return true;

	}


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) === 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func001C = (): boolean => {


	if ( ( ! Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func001Func012C = (): boolean => {


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) > 6 ) ) ) {

		return true;

	}


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) === 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func001C = (): boolean => {


	if ( ( ! Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func001Func012C() ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func011C = (): boolean => {


	if ( ( ! ( RAbsBJ( udg_TempReal ) > 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func032C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func033Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func033C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func053C = (): boolean => {


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) > 3 ) ) ) {

		return true;

	}


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) === 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004Func003C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 99 ) ) ) {

		return false;

	}


	if ( ( ! Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func053C() ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004Func004C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func004C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 7 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func005Func001Func001Func001C = (): boolean => {


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) > 6.2 ) ) ) {

		return true;

	}


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) === 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Axemaster_Func003Func001Func001Func005Func001Func001C = (): boolean => {


	if ( ( ! Trig_Axemaster_Func003Func001Func001Func005Func001Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func005Func001Func003C = (): boolean => {


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) > 5 ) ) ) {

		return true;

	}


	if ( ( ( TimerGetRemaining( udg_RobotTimer ) === 0 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Axemaster_Func003Func001Func001Func005Func001C = (): boolean => {


	if ( ( ! ( GetUnitLifePercent( GetEnumUnit() ) === 99 ) ) ) {

		return false;

	}


	if ( ( ! Trig_Axemaster_Func003Func001Func001Func005Func001Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001Func005C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 5.5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( IsUnitIllusionBJ( GetEnumUnit() ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Axemaster_Func003A = (): void => {


	if ( ( Trig_Axemaster_Func003Func001C() ) ) {


		if ( ( Trig_Axemaster_Func003Func001Func001C() ) ) {


			if ( ( Trig_Axemaster_Func003Func001Func001Func004C() ) ) {

				udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
				udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1600, udg_TempPoint2, Condition( Trig_Axemaster_Func003Func001Func001Func004Func003002003 ) );

				if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004C() ) ) {

					IssueImmediateOrderBJ( GetEnumUnit(), "stop" )

					if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003C() ) ) {

						udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
						SetUnitLifePercentBJ( GetEnumUnit(), 100 )
						UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
						udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
						udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( GroupPickRandomUnit( udg_TempUnitGroup ) ) );
						udg_TempReal = GetLocationZ( udg_TempPoint3 ) - GetLocationZ( udg_TempPoint );

						if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func011C() ) ) {

							SetUnitManaPercentBJ( GetEnumUnit(), 20 )

						} else {

							SetUnitManaPercentBJ( GetEnumUnit(), 0 )

						}

						SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint3, 0 )
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = true;
						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 0;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 0;
						udg_Damage[ udg_Index ] = 500;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 0;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func032C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}


						if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func033C() ) ) {

							udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.1 );
							udg_ExplodeRadius[ udg_Index ] = 150;

						} else {


							if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func033Func001C() ) ) {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.3 );
								udg_ExplodeRadius[ udg_Index ] = 170;

							} else {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.5 );
								udg_ExplodeRadius[ udg_Index ] = 130;

							}


						}

						SetUnitTimeScalePercent( GetEnumUnit(), ( 88 / ( udg_Distance[ udg_Index ] / udg_Speed[ udg_Index ] ) ) )
						SetUnitAnimation( GetEnumUnit(), "attack slam" )
						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 300;
						udg_HorizontalArc[ udg_Index ] = 0;
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
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


						if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func003Func001C() ) ) {

							SetUnitManaPercentBJ( GetEnumUnit(), 0 )
							SetUnitLifePercentBJ( GetEnumUnit(), 99 )
							UnitAddAbilityBJ( FourCC( "A00X" ), GetEnumUnit() )
							IssueImmediateOrderBJ( GetEnumUnit(), "whirlwind" )
							SetUnitPathing( GetEnumUnit(), false )
							GroupAddUnitSimple( GetEnumUnit(), udg_BladeGroup )
							SetUnitMoveSpeed( GetEnumUnit(), 1 )
							udg_HomingUnit = GroupPickRandomUnit( udg_TempGroup2 );
							SetUnitTimeScalePercent( GetEnumUnit(), 100 )
							EnableTrigger( gg_trg_Bladestorm_Move )
							EnableTrigger( gg_trg_Bladestorm )

						} else {

						null

						}


					}


				} else {


					if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func001C() ) ) {

						DestroyGroup( udg_TempGroup2 )
						udg_TempGroup2 = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func002002002 ) );

						if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003C() ) ) {

							udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
							SetUnitManaPercentBJ( GetEnumUnit(), 15 )
							SetUnitLifePercentBJ( GetEnumUnit(), 100 )
							UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
							udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( GroupPickRandomUnit( udg_TempUnitGroup ) ) );
							CreateTextTagUnitBJ( "TRIGSTR_835", GroupPickRandomUnit( udg_TempUnitGroup ), 0, 9.8, 100, 100, 100, 0 )
							SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
							SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
							SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
							SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
							SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint3, 0 )
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = true;
							udg_Teleportation[ udg_Index ] = 0;
							udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
							udg_DamageMethod[ udg_Index ] = 0;
							udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
							udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
							udg_CollisionRadius[ udg_Index ] = 0;
							udg_Damage[ udg_Index ] = 500;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 0;
							udg_Drag[ udg_Index ] = false;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func035C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}


							if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func036C() ) ) {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.6 );
								udg_ExplodeRadius[ udg_Index ] = 150;

							} else {


								if ( ( Trig_Axemaster_Func003Func001Func001Func004Func004Func001Func003Func036Func001C() ) ) {

									udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.75 );
									udg_ExplodeRadius[ udg_Index ] = 170;

								} else {

									udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.5 );
									udg_ExplodeRadius[ udg_Index ] = 130;

								}


							}

							SetUnitTimeScalePercent( GetEnumUnit(), ( 88 / ( udg_Distance[ udg_Index ] / udg_Speed[ udg_Index ] ) ) )
							SetUnitAnimation( GetEnumUnit(), "attack slam" )
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 500;
							udg_HorizontalArc[ udg_Index ] = 0;
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
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

							SetUnitLifePercentBJ( GetEnumUnit(), 100 )

						}


					} else {

					null

					}


				}

				DestroyGroup( udg_TempGroup2 )
				RemoveLocation( udg_TempPoint2 )

			} else {

			null

			}


			if ( ( Trig_Axemaster_Func003Func001Func001Func005C() ) ) {


				if ( ( Trig_Axemaster_Func003Func001Func001Func005Func001C() ) ) {

					CreateTextTagUnitBJ( "TRIGSTR_824", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
					SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
					SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
					SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
					SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

				} else {


					if ( ( Trig_Axemaster_Func003Func001Func001Func005Func001Func001C() ) ) {

						CreateTextTagUnitBJ( "TRIGSTR_904", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
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


		} else {


			if ( ( Trig_Axemaster_Func003Func001Func001Func001C() ) ) {

				udg_TempInt = 7;

			} else {


				if ( ( Trig_Axemaster_Func003Func001Func001Func001Func001C() ) ) {

					udg_TempInt = 10;

				} else {

					udg_TempInt = 100;

				}


			}


			if ( ( Trig_Axemaster_Func003Func001Func001Func002C() ) ) {

				SetUnitLifePercentBJ( GetEnumUnit(), 99 )
				CreateTextTagUnitBJ( "TRIGSTR_840", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
				SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
				SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
				SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
				SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

			} else {


				if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001C() ) ) {

					udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
					udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1600, udg_TempPoint2, Condition( Trig_Axemaster_Func003Func001Func001Func002Func001Func004002003 ) );

					if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005C() ) ) {

						IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
						udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
						SetUnitManaPercentBJ( GetEnumUnit(), 0 )
						SetUnitLifePercentBJ( GetEnumUnit(), 100 )
						UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
						TriggerExecute( gg_trg_Reset )
						udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
						udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
						udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( GroupPickRandomUnit( udg_TempUnitGroup ) ) );
						SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint3, 0 )
						udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
						UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
						udg_Missile[ udg_Index ] = GetLastCreatedUnit();
						udg_DamageSource[ udg_Index ] = GetEnumUnit();
						udg_Jump[ udg_Index ] = true;
						udg_Teleportation[ udg_Index ] = 0;
						udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
						udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
						udg_DamageMethod[ udg_Index ] = 0;
						udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
						udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
						udg_CollisionRadius[ udg_Index ] = 0;
						udg_Damage[ udg_Index ] = 500;
						udg_Targets[ udg_Index ] = 1;
						udg_TargetsAdvanced[ udg_Index ] = 0;
						udg_Drag[ udg_Index ] = false;
						udg_Link[ udg_Index ] = false;
						udg_Lightning[ udg_Index ] = false;

						if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func034C() ) ) {

							AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
							udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

						} else {

						null

						}


						if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func035C() ) ) {

							udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.3 );
							udg_ExplodeRadius[ udg_Index ] = 150;

						} else {


							if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func035Func001C() ) ) {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.5 );
								udg_ExplodeRadius[ udg_Index ] = 170;

							} else {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 1.1 );
								udg_ExplodeRadius[ udg_Index ] = 130;

							}


						}

						SetUnitTimeScalePercent( GetEnumUnit(), ( 88 / ( udg_Distance[ udg_Index ] / udg_Speed[ udg_Index ] ) ) )
						SetUnitAnimation( GetEnumUnit(), "attack slam" )
						udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
						udg_VerticalArc[ udg_Index ] = 300;
						udg_HorizontalArc[ udg_Index ] = 0;
						udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
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

						DestroyGroup( udg_TempGroup2 )
						udg_TempGroup2 = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func002002002 ) );

						if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003C() ) ) {

							udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
							SetUnitManaPercentBJ( GetEnumUnit(), 0 )
							SetUnitLifePercentBJ( GetEnumUnit(), 100 )
							UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
							TriggerExecute( gg_trg_Reset )
							udg_StartPoint[ udg_Index ] = OffsetLocation( udg_TempPoint2, 0.01, 0.01 );
							udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
							udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 200, GetUnitFacing( GroupPickRandomUnit( udg_TempUnitGroup ) ) );
							CreateTextTagUnitBJ( "TRIGSTR_837", GroupPickRandomUnit( udg_TempUnitGroup ), 0, 9.8, 100, 100, 100, 0 )
							SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
							SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
							SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
							SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
							SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint3, 0 )
							udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
							UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
							udg_Missile[ udg_Index ] = GetLastCreatedUnit();
							udg_DamageSource[ udg_Index ] = GetEnumUnit();
							udg_Jump[ udg_Index ] = true;
							udg_Teleportation[ udg_Index ] = 0;
							udg_Distance[ udg_Index ] = DistanceBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint3 );
							udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
							udg_DamageMethod[ udg_Index ] = 0;
							udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
							udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
							udg_CollisionRadius[ udg_Index ] = 0;
							udg_Damage[ udg_Index ] = 500;
							udg_Targets[ udg_Index ] = 1;
							udg_TargetsAdvanced[ udg_Index ] = 0;
							udg_Drag[ udg_Index ] = false;
							udg_Link[ udg_Index ] = false;
							udg_Lightning[ udg_Index ] = false;

							if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func035C() ) ) {

								AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
								udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

							} else {

							null

							}


							if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func036C() ) ) {

								udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.6 );
								udg_ExplodeRadius[ udg_Index ] = 150;

							} else {


								if ( ( Trig_Axemaster_Func003Func001Func001Func002Func001Func005Func003Func036Func001C() ) ) {

									udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.75 );
									udg_ExplodeRadius[ udg_Index ] = 170;

								} else {

									udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.5 );
									udg_ExplodeRadius[ udg_Index ] = 130;

								}


							}

							SetUnitTimeScalePercent( GetEnumUnit(), ( 88 / ( udg_Distance[ udg_Index ] / udg_Speed[ udg_Index ] ) ) )
							SetUnitAnimation( GetEnumUnit(), "attack slam" )
							udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
							udg_VerticalArc[ udg_Index ] = 500;
							udg_HorizontalArc[ udg_Index ] = 0;
							udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl";
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

							SetUnitLifePercentBJ( GetEnumUnit(), 100 )

						}


					}

					DestroyGroup( udg_TempGroup2 )
					RemoveLocation( udg_TempPoint2 )

				} else {

					SetUnitManaBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) - GetRandomReal( - 0.5, 1 ) ) )

				}


			}


		}


	} else {

	null

	}


};


const Trig_Axemaster_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00G" ) );
	ForGroupBJ( udg_TempGroup, Trig_Axemaster_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Axemaster = (): void => {

	gg_trg_Axemaster = CreateTrigger();
	DisableTrigger( gg_trg_Axemaster )
	TriggerRegisterTimerEventPeriodic( gg_trg_Axemaster, 1 )
	TriggerAddAction( gg_trg_Axemaster, Trig_Axemaster_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Axemaster();

} );
