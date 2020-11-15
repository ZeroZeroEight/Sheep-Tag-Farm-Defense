
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Homing Move
//===========================================================================
const Trig_Homing_Move_Func002Func001Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_HomingAngle < ( GetUnitFacing( GetEnumUnit() ) + 0 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func002Func001Func001C = (): boolean => {


	if ( ( ! ( udg_HomingAngle > ( GetUnitFacing( GetEnumUnit() ) + 0 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func002Func001Func003C = (): boolean => {


	if ( ( ! ( udg_HomingAngle >= 360 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_HomingAngle > ( GetUnitFacing( GetEnumUnit() ) + 180 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func002Func003C = (): boolean => {


	if ( ( ! ( udg_HomingAngle <= 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func002C = (): boolean => {


	if ( ( ! ( udg_HomingAngle < ( GetUnitFacing( GetEnumUnit() ) - 180 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func006C = (): boolean => {


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint4 ) >= 2000 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func008Func006C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_HomingUnit ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001Func008C = (): boolean => {


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_FLYABILITY ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Move_Func002A = (): void => {


	if ( ( Trig_Homing_Move_Func002Func001C() ) ) {


		if ( ( Trig_Homing_Move_Func002Func001Func002C() ) ) {

			udg_HomingAngle = ( udg_HomingAngle - udg_TurnSpeed );

			if ( ( Trig_Homing_Move_Func002Func001Func002Func003C() ) ) {

				udg_HomingAngle = ( udg_HomingAngle + 360 );

			} else {

			null

			}


		} else {


			if ( ( Trig_Homing_Move_Func002Func001Func002Func001C() ) ) {

				udg_HomingAngle = ( udg_HomingAngle + udg_TurnSpeed );

				if ( ( Trig_Homing_Move_Func002Func001Func002Func001Func003C() ) ) {

					udg_HomingAngle = ( udg_HomingAngle - 360 );

				} else {

				null

				}


			} else {


				if ( ( Trig_Homing_Move_Func002Func001Func002Func001Func001C() ) ) {

					udg_HomingAngle = ( udg_HomingAngle - udg_TurnSpeed );

				} else {


					if ( ( Trig_Homing_Move_Func002Func001Func002Func001Func001Func001C() ) ) {

						udg_HomingAngle = ( udg_HomingAngle + udg_TurnSpeed );

					} else {

					null

					}


				}


			}


		}

		udg_TempPoint = GetUnitLoc( GetEnumUnit() );
		udg_TempPoint4 = GetUnitLoc( udg_HomingUnit );
		udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, 5, GetUnitFacing( GetEnumUnit() ) );

		if ( ( Trig_Homing_Move_Func002Func001Func006C() ) ) {

			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, 22, udg_HomingAngle );

		} else {

			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, 11, udg_HomingAngle );

		}

		udg_TempGroup2 = GetUnitsOfTypeIdAll( FourCC( "h00B" ) );

		if ( ( Trig_Homing_Move_Func002Func001Func008C() ) ) {

			SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint3 ) )
			SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint3 ) )
			SetUnitPositionLoc( GroupPickRandomUnit( udg_TempGroup2 ), udg_TempPoint3 )

			if ( ( Trig_Homing_Move_Func002Func001Func008Func006C() ) ) {

				SetUnitFacingToFaceUnitTimed( GetEnumUnit(), udg_HomingUnit, 0 )
				SetUnitFacingTimed( GroupPickRandomUnit( udg_TempGroup2 ), ( GetUnitFacing( GetEnumUnit() ) + 90 ), 0 )

			} else {

				UnitApplyTimedLifeBJ( 0.1, FourCC( "BTLF" ), GroupPickRandomUnit( udg_TempGroup2 ) )

			}


		} else {

			UnitApplyTimedLifeBJ( 0.1, FourCC( "BTLF" ), GroupPickRandomUnit( udg_TempGroup2 ) )

		}

		DestroyGroup( udg_TempGroup2 )
		RemoveLocation( udg_TempPoint3 )
		RemoveLocation( udg_TempPoint2 )
		RemoveLocation( udg_TempPoint )

	} else {

	null

	}


};


const Trig_Homing_Move_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E009" ) );
	ForGroupBJ( udg_TempGroup, Trig_Homing_Move_Func002A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Homing_Move = (): void => {

	gg_trg_Homing_Move = CreateTrigger();
	DisableTrigger( gg_trg_Homing_Move )
	TriggerRegisterTimerEventPeriodic( gg_trg_Homing_Move, 0.03 )
	TriggerAddAction( gg_trg_Homing_Move, Trig_Homing_Move_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Homing_Move();

} );
