
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: After Destination 1 to 6
//===========================================================================
const Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 6 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func005Func001Func003Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func005Func001Func003C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func005Func001C = (): boolean => {


	if ( ( ! ( udg_Speed[ udg_LoopIndex ] >= 10.5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func005C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) !== 0.57 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func007Func003C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func007Func004C = (): boolean => {


	if ( ( ! ( udg_Drag[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func007Func008C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_Missile[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func007Func009C = (): boolean => {


	if ( ( ! ( udg_Drag[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001Func007C = (): boolean => {


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint3 ) <= 50 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Func001C = (): boolean => {


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_After_Destination_1_to_6_Actions = (): void => {


	if ( ( Trig_After_Destination_1_to_6_Func001C() ) ) {

		udg_TempPoint = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
		udg_TempPoint3 = GetUnitLoc( udg_DamageSource[ udg_LoopIndex ] );
		udg_Angle[ udg_LoopIndex ] = AngleBetweenPoints( udg_TempPoint, udg_TempPoint3 );

		if ( ( Trig_After_Destination_1_to_6_Func001Func005C() ) ) {

			udg_Speed[ udg_LoopIndex ] = ( udg_Speed[ udg_LoopIndex ] * 1.01 );

		} else {


			if ( ( Trig_After_Destination_1_to_6_Func001Func005Func001C() ) ) {

				AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl" )
				DestroyEffectBJ( GetLastCreatedEffectBJ() )

				if ( ( Trig_After_Destination_1_to_6_Func001Func005Func001Func003C() ) ) {

					udg_Speed[ udg_LoopIndex ] = ( 280 * 0.03 );
					UnitApplyTimedLifeBJ( 6, FourCC( "BTLF" ), udg_Missile[ udg_LoopIndex ] )

				} else {


					if ( ( Trig_After_Destination_1_to_6_Func001Func005Func001Func003Func001C() ) ) {

						udg_Speed[ udg_LoopIndex ] = ( 310 * 0.03 );
						UnitApplyTimedLifeBJ( 7, FourCC( "BTLF" ), udg_Missile[ udg_LoopIndex ] )

					} else {

						udg_Speed[ udg_LoopIndex ] = ( 250 * 0.03 );
						UnitApplyTimedLifeBJ( 5, FourCC( "BTLF" ), udg_Missile[ udg_LoopIndex ] )

					}


				}


			} else {

			null

			}


		}

		SetUnitFacingTimed( udg_Missile[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ], 0 )

		if ( ( Trig_After_Destination_1_to_6_Func001Func007C() ) ) {

			udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, udg_Speed[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ] );
			TriggerExecute( gg_trg_Collision_Reaction )

			if ( ( Trig_After_Destination_1_to_6_Func001Func007Func003C() ) ) {

				TriggerExecute( gg_trg_Damage )
				KillUnit( udg_Missile[ udg_LoopIndex ] )

			} else {

			null

			}


			if ( ( Trig_After_Destination_1_to_6_Func001Func007Func004C() ) ) {

				TriggerExecute( gg_trg_Drag )

			} else {

			null

			}

			RemoveLocation( udg_TempPoint2 )

		} else {

			udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, udg_Speed[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ] );
			SetUnitPositionLoc( udg_Missile[ udg_LoopIndex ], udg_TempPoint2 )
			TriggerExecute( gg_trg_Collision_Reaction )

			if ( ( Trig_After_Destination_1_to_6_Func001Func007Func008C() ) ) {

				TriggerExecute( gg_trg_Damage )

			} else {

			null

			}


			if ( ( Trig_After_Destination_1_to_6_Func001Func007Func009C() ) ) {

				TriggerExecute( gg_trg_Drag )

			} else {

			null

			}

			RemoveLocation( udg_TempPoint2 )

		}

		RemoveLocation( udg_TempPoint )
		RemoveLocation( udg_TempPoint3 )

	} else {


		if ( ( Trig_After_Destination_1_to_6_Func001Func001C() ) ) {

			SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
			RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
			udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
			udg_AfterDestination[ udg_LoopIndex ] = 5;

		} else {


			if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001C() ) ) {

				SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
				RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
				udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
				udg_Angle[ udg_LoopIndex ] = ( udg_Angle[ udg_LoopIndex ] - 180 );
				udg_AfterDestination[ udg_LoopIndex ] = 5;

			} else {


				if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001C() ) ) {

					SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
					RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
					udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
					udg_Angle[ udg_LoopIndex ] = ( udg_Angle[ udg_LoopIndex ] - 180 );
					udg_Distance[ udg_LoopIndex ] = ( udg_Distance[ udg_LoopIndex ] * 2 );
					udg_AfterDestination[ udg_LoopIndex ] = 5;

				} else {


					if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001C() ) ) {

						SetUnitManaBJ( udg_Missile[ udg_LoopIndex ], 0 )
						RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
						udg_StartPoint[ udg_LoopIndex ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
						udg_AfterDestination[ udg_LoopIndex ] = 4;

					} else {


						if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001C() ) ) {


							if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001C() ) ) {

								udg_Damage[ udg_LoopIndex ] = ( udg_Damage[ udg_LoopIndex ] * - 1 );

								if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001Func002C() ) ) {

									udg_Targets[ udg_LoopIndex ] = 2;

								} else {


									if ( ( Trig_After_Destination_1_to_6_Func001Func001Func001Func001Func001Func001Func001Func002Func001C() ) ) {

										udg_Targets[ udg_LoopIndex ] = 1;

									} else {

									null

									}


								}

								RemoveLocation( udg_StartPoint[ udg_LoopIndex ] )
								udg_AfterDestination[ udg_LoopIndex ] = 5;

							} else {

							null

							}


						} else {

						null

						}


					}


				}


			}


		}


	}


};


//===========================================================================
const InitTrig_After_Destination_1_to_6 = (): void => {

	gg_trg_After_Destination_1_to_6 = CreateTrigger();
	TriggerAddAction( gg_trg_After_Destination_1_to_6, Trig_After_Destination_1_to_6_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_After_Destination_1_to_6();
} );
