

import { addScriptHook, W3TS_HOOK, File } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Missile Periodic
//===========================================================================
const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func007C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func008C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func010C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func011C = (): boolean => {


	if ( ( ! ( udg_Drag[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func001Func002C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] !== 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func001C = (): boolean => {


	if ( ( ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}


	if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func001Func002C() ) ) {

		return true;

	}

	return false;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func002C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] < 7 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014C = (): boolean => {


	if ( ( ! Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001Func003C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) < 180 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func001002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func003C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004C = (): boolean => {


	if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func002C() ) ) {

		return true;

	}


	if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004Func003C() ) ) {

		return true;

	}

	return false;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001C = (): boolean => {


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === false ) ) ) {

		return false;

	}


	if ( ( ! Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002A = (): void => {


	if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002Func001C() ) ) {

		SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint ) )
		SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint ) )

	} else {

	null

	}


};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func004C = (): boolean => {


	if ( ( ( udg_Teleportation[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( udg_Teleportation[ udg_LoopIndex ] === 3 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func003C = (): boolean => {


	if ( ( ! Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func004Func003C = (): boolean => {


	if ( ( ( udg_Teleportation[ udg_LoopIndex ] === 3 ) ) ) {

		return true;

	}


	if ( ( ( udg_Teleportation[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002Func004C = (): boolean => {


	if ( ( ! Trig_Missile_Periodic_Func001Func001Func002Func002Func004Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func002C = (): boolean => {


	if ( ( ! ( udg_Teleportation[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Teleportation[ udg_LoopIndex ] < 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func003Func002C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.97 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func003C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func004C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.63 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.56 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.55 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_MissileSize[ udg_LoopIndex ] > 140 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_HomingUnit ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func005Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func005C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.54 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] !== 0 ) ) ) {

		return false;

	}


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func005Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func005C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01I" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func002C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.53 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] !== 0 ) ) ) {

		return false;

	}


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func006Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func006C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01I" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func010Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005Func010C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I01I" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func005C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.46 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func006C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.49 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func007C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.02 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func016Func001C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func016Func003C = (): boolean => {


	if ( ( ! ( udg_IndexReseter === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002Func016C = (): boolean => {


	if ( ( ! ( udg_Link[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001Func002C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Missile[ udg_LoopIndex ] !== null ) ) ) {

		return false;

	}

	return true;

};


const Trig_Missile_Periodic_Actions = (): void => {
  

  File.write(
		"stfd/settings.txt",
		"periodic start",
	);

	udg_LoopIndex = 1;

	while ( true ) {

		if ( udg_LoopIndex > udg_Index ) break;

		if ( ( Trig_Missile_Periodic_Func001Func001C() ) ) {


			if ( ( Trig_Missile_Periodic_Func001Func001Func002C() ) ) {


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001C() ) ) {


					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003C() ) ) {

						SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) + ( 180 / ( udg_Distance[ udg_LoopIndex ] / udg_Speed[ udg_LoopIndex ] ) ) ) )
						udg_TempPoint = PolarProjectionBJ( udg_StartPoint[ udg_LoopIndex ], ( udg_Distance[ udg_LoopIndex ] * ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) / 180 ) ), udg_Angle[ udg_LoopIndex ] );
						udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, ( udg_HorizontalArc[ udg_LoopIndex ] * SinBJ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) ) ), ( udg_Angle[ udg_LoopIndex ] - 90 ) );
						SetUnitFacingToFaceLocTimed( udg_Missile[ udg_LoopIndex ], udg_TempPoint2, 0 )
						SetUnitPositionLoc( udg_Missile[ udg_LoopIndex ], udg_TempPoint2 )
						SetUnitFlyHeightBJ( udg_Missile[ udg_LoopIndex ], ( udg_VerticalArc[ udg_LoopIndex ] * SinBJ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) ) ), 0 )

						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func007C() ) ) {

							SetUnitFlyHeightBJ( udg_DamageSource[ udg_LoopIndex ], GetUnitFlyHeight( udg_Missile[ udg_LoopIndex ] ), 0 )
							SetUnitX( udg_DamageSource[ udg_LoopIndex ], GetLocationX( udg_TempPoint2 ) )
							SetUnitY( udg_DamageSource[ udg_LoopIndex ], GetLocationY( udg_TempPoint2 ) )
							SetUnitPathing( udg_DamageSource[ udg_LoopIndex ], false )
							IssueImmediateOrderBJ( udg_DamageSource[ udg_LoopIndex ], "stop" )

						} else {

						null

						}


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func008C() ) ) {

							udg_TempPoint3 = GetUnitLoc( udg_DamageSource[ udg_LoopIndex ] );
							udg_XYZ[ 1 ] = GetLocationX( udg_TempPoint3 );
							udg_XYZ[ 2 ] = GetLocationY( udg_TempPoint3 );
							udg_XYZ[ 3 ] = GetLocationZ( udg_TempPoint3 ) + 35;
							udg_XYZ[ 3 ] = ( GetUnitFlyHeight( udg_DamageSource[ udg_LoopIndex ] ) + udg_XYZ[ 3 ] );
							udg_XYZ[ 4 ] = GetLocationX( udg_TempPoint2 );
							udg_XYZ[ 5 ] = GetLocationY( udg_TempPoint2 );
							udg_XYZ[ 6 ] = GetLocationZ( udg_TempPoint2 ) + 75;
							udg_XYZ[ 6 ] = ( GetUnitFlyHeight( udg_Missile[ udg_LoopIndex ] ) + udg_XYZ[ 6 ] );
							MoveLightningEx( udg_LightningEffect[ udg_LoopIndex ], true, udg_XYZ[ 1 ], udg_XYZ[ 2 ], udg_XYZ[ 3 ], udg_XYZ[ 4 ], udg_XYZ[ 5 ], udg_XYZ[ 6 ] )
							RemoveLocation( udg_TempPoint3 )

						} else {

						null

						}

						TriggerExecute( gg_trg_Collision_Reaction )

						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func010C() ) ) {

							TriggerExecute( gg_trg_Damage )

						} else {

						null

						}


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func011C() ) ) {

							TriggerExecute( gg_trg_Drag )

						} else {

						null

						}

						RemoveLocation( udg_TempPoint )
						RemoveLocation( udg_TempPoint2 )

					} else {


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014C() ) ) {

							udg_TempPoint2 = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
							TriggerExecute( gg_trg_Damage_Method_1_And_4 )
							RemoveLocation( udg_TempPoint2 )

						} else {


							if ( ( Trig_Missile_Periodic_Func001Func001Func002Func001Func003Func014Func002C() ) ) {

								ConditionalTriggerExecute( gg_trg_After_Destination_1_to_6 )

							} else {

								KillUnit( udg_Missile[ udg_LoopIndex ] )

							}


						}


					}


				} else {

					ConditionalTriggerExecute( gg_trg_Link )

				}


			} else {


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002C() ) ) {

					udg_TempPoint = GetUnitLoc( udg_DamageSource[ udg_LoopIndex ] );
					udg_TempPoint2 = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func003C() ) ) {

						udg_TempGroup = GetUnitsInRangeOfLocMatching( udg_ExplodeRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func001002003 ) );
						ForGroupBJ( udg_TempGroup, Trig_Missile_Periodic_Func001Func001Func002Func002Func003Func002A )
						DestroyGroup( udg_TempGroup )

					} else {

					null

					}


					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func002Func004C() ) ) {

						SetUnitX( udg_DamageSource[ udg_LoopIndex ], GetLocationX( udg_TempPoint2 ) )
						SetUnitY( udg_DamageSource[ udg_LoopIndex ], GetLocationY( udg_TempPoint2 ) )

					} else {

					null

					}

					AddSpecialEffectLocBJ( udg_TempPoint2, udg_DamageSpecialEffect[ udg_LoopIndex ] )
					DestroyEffectBJ( GetLastCreatedEffectBJ() )
					AddSpecialEffectLocBJ( udg_TempPoint, udg_DamageSpecialEffect[ udg_LoopIndex ] )
					DestroyEffectBJ( GetLastCreatedEffectBJ() )
					RemoveLocation( udg_TempPoint )
					RemoveLocation( udg_TempPoint2 )

				} else {

				null

				}


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func003C() ) ) {

					SetUnitFlyHeightBJ( udg_DamageSource[ udg_LoopIndex ], GetUnitDefaultFlyHeight( udg_DamageSource[ udg_LoopIndex ] ), 100 )

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func003Func002C() ) ) {

						udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
						SetUnitPositionLoc( udg_DamageSource[ udg_LoopIndex ], udg_TempPoint )
						RemoveLocation( udg_TempPoint )

					} else {

					null

					}


				} else {

				null

				}


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func004C() ) ) {

					udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 8;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, 145, I2R( ( GetForLoopIndexA() * 45 ) ) );
						AddSpecialEffectLocBJ( udg_TempPoint2, udg_DamageSpecialEffect[ udg_LoopIndex ] )
						DestroyEffectBJ( GetLastCreatedEffectBJ() )
						RemoveLocation( udg_TempPoint2 )
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}


					RemoveLocation( udg_TempPoint )

				} else {

				null

				}


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005C() ) ) {

					udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
					CreateNUnitsAtLoc( 1, FourCC( "h00D" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func006C() ) ) {

						SetUnitAbilityLevelSwapped( FourCC( "A00V" ), GetLastCreatedUnit(), 3 )

					} else {


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func006Func001C() ) ) {

							SetUnitAbilityLevelSwapped( FourCC( "A00V" ), GetLastCreatedUnit(), 2 )

						} else {

						null

						}


					}

					UnitApplyTimedLifeBJ( 0.1, FourCC( "BTLF" ), GetLastCreatedUnit() )
					IssueImmediateOrderBJ( GetLastCreatedUnit(), "thunderclap" )
					CreateNUnitsAtLoc( 1, FourCC( "h00E" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func010C() ) ) {

						SetUnitAbilityLevelSwapped( FourCC( "A00U" ), GetLastCreatedUnit(), 3 )

					} else {


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func010Func001C() ) ) {

							SetUnitAbilityLevelSwapped( FourCC( "A00U" ), GetLastCreatedUnit(), 2 )

						} else {

						null

						}


					}

					UnitApplyTimedLifeBJ( 0.1, FourCC( "BTLF" ), GetLastCreatedUnit() )
					IssueImmediateOrderBJ( GetLastCreatedUnit(), "thunderclap" )
					bj_forLoopAIndex = 1;
					bj_forLoopAIndexEnd = 8;

					while ( true ) {

						if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
						udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, 230, I2R( ( GetForLoopIndexA() * 45 ) ) );
						AddSpecialEffectLocBJ( udg_TempPoint2, "Objects\\Spawnmodels\\NightElf\\NECancelDeath\\NECancelDeath.mdl" )
						DestroyEffectBJ( GetLastCreatedEffectBJ() )
						RemoveLocation( udg_TempPoint2 )
						bj_forLoopAIndex = bj_forLoopAIndex + 1;

					}


					RemoveLocation( udg_TempPoint )

				} else {

					udg_TempGroup = GetUnitsOfPlayerAll( Player( 8 ) );

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002C() ) ) {

						udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
						CreateNUnitsAtLoc( 1, FourCC( "n007" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
						SetUnitAnimation( GetLastCreatedUnit(), "Birth" )

						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func005C() ) ) {

							UnitAddItemByIdSwapped( FourCC( "I002" ), GetLastCreatedUnit() )
							UnitApplyTimedLifeBJ( 20, FourCC( "BTLF" ), GetLastCreatedUnit() )

						} else {


							if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func005Func001C() ) ) {

								UnitAddItemByIdSwapped( FourCC( "I000" ), GetLastCreatedUnit() )
								UnitApplyTimedLifeBJ( 15, FourCC( "BTLF" ), GetLastCreatedUnit() )

							} else {

								UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )

							}


						}

						AddSpecialEffectLocBJ( udg_TempPoint, "Objects\\Spawnmodels\\NightElf\\EntBirthTarget\\EntBirthTarget.mdl" )
						DestroyEffectBJ( GetLastCreatedEffectBJ() )
						RemoveLocation( udg_TempPoint )

					} else {


						if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001C() ) ) {

							udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
							CreateNUnitsAtLoc( 1, FourCC( "n008" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
							SetUnitAnimation( GetLastCreatedUnit(), "Birth" )

							if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func005C() ) ) {

								UnitAddItemByIdSwapped( FourCC( "I024" ), GetLastCreatedUnit() )
								UnitAddItemByIdSwapped( FourCC( "I003" ), GetLastCreatedUnit() )
								UnitApplyTimedLifeBJ( 20, FourCC( "BTLF" ), GetLastCreatedUnit() )

							} else {


								if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func005Func001C() ) ) {

									UnitAddItemByIdSwapped( FourCC( "I025" ), GetLastCreatedUnit() )
									UnitAddItemByIdSwapped( FourCC( "I001" ), GetLastCreatedUnit() )
									UnitApplyTimedLifeBJ( 15, FourCC( "BTLF" ), GetLastCreatedUnit() )

								} else {

									UnitAddItemByIdSwapped( FourCC( "I026" ), GetLastCreatedUnit() )
									UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetLastCreatedUnit() )

								}


							}

							AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Other\\CrushingWave\\CrushingWaveDamage.mdl" )
							DestroyEffectBJ( GetLastCreatedEffectBJ() )
							RemoveLocation( udg_TempPoint )

						} else {


							if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001C() ) ) {

								ConditionalTriggerExecute( gg_trg_Firebolt )

							} else {


								if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001Func001C() ) ) {

									udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
									CreateNUnitsAtLoc( 1, FourCC( "h00H" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
									UnitApplyTimedLifeBJ( 0.1, FourCC( "BTLF" ), GetLastCreatedUnit() )
									IssueImmediateOrderBJ( GetLastCreatedUnit(), "thunderclap" )
									RemoveLocation( udg_TempPoint )

								} else {


									if ( ( Trig_Missile_Periodic_Func001Func001Func002Func005Func002Func001Func001Func001Func001C() ) ) {

										udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
										bj_forLoopAIndex = 1;
										bj_forLoopAIndexEnd = R2I( udg_HorizontalArc[ udg_LoopIndex ] );

										while ( true ) {

											if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
											CreateNUnitsAtLoc( 1, FourCC( "n009" ), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ), udg_TempPoint, bj_UNIT_FACING )
											UnitApplyTimedLifeBJ( ( udg_HorizontalArc[ udg_Index ] * 4 ), FourCC( "BTLF" ), GetLastCreatedUnit() )
											bj_forLoopAIndex = bj_forLoopAIndex + 1;

										}


										RemoveLocation( udg_TempPoint )

									} else {

									null

									}


								}


							}


						}


					}

					DestroyGroup( udg_TempGroup )

				}


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func006C() ) ) {

					ConditionalTriggerExecute( gg_trg_Glaive_Thrower_Spill )

				} else {

				null

				}


				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func007C() ) ) {

					ConditionalTriggerExecute( gg_trg_Thrust_Rockets )

				} else {

				null

				}

				SetUnitPathing( udg_DamageSource[ udg_LoopIndex ], true )
				SetUnitTimeScalePercent( udg_DamageSource[ udg_LoopIndex ], 100 )
				udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
				RemoveUnit( udg_Missile[ udg_LoopIndex ] )
        DestroyEffectBJ( udg_MissileEffect[ udg_LoopIndex ] )
				RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
				DestroyGroup( udg_AlreadyHit[ udg_LoopIndex ] )
				udg_Missile[ udg_LoopIndex ] = null;

				if ( ( Trig_Missile_Periodic_Func001Func001Func002Func016C() ) ) {

					udg_AfterLinkDeath[ udg_LoopIndex ] = 1;
					CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_TempPoint, udg_Angle[ udg_LoopIndex ] )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
					udg_Missile[ udg_LoopIndex ] = GetLastCreatedUnit();
					AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_LoopIndex ] )
					SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_LoopIndex ], udg_MissileSize[ udg_LoopIndex ], udg_MissileSize[ udg_LoopIndex ] )

				} else {


					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func016Func001C() ) ) {

						DestroyLightningBJ( udg_LightningEffect[ udg_LoopIndex ] )

					} else {

					null

					}

					udg_IndexReseter = ( udg_IndexReseter - 1 );

					if ( ( Trig_Missile_Periodic_Func001Func001Func002Func016Func003C() ) ) {

						udg_Index = 0;
						DisableTrigger( GetTriggeringTrigger() )

					} else {

					null

					}


				}

				RemoveLocation( udg_TempPoint )

			}


		} else {

		null

		}

		udg_LoopIndex = udg_LoopIndex + 1;

	}

  File.write(
		"stfd/settings.txt",
		"periodic end",
	);

};


//===========================================================================
const InitTrig_Missile_Periodic = (): void => {

	gg_trg_Missile_Periodic = CreateTrigger();
	DisableTrigger( gg_trg_Missile_Periodic )
	TriggerRegisterTimerEventPeriodic( gg_trg_Missile_Periodic, 0.03 )
	TriggerAddAction( gg_trg_Missile_Periodic, Trig_Missile_Periodic_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Missile_Periodic();
} );
