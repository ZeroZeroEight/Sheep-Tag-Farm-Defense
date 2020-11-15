
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Bladestorm Move
//
// 275 325 375 speed
//===========================================================================
const Trig_Bladestorm_Move_Func001Func002Func001Func003Func002C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Move_Func001Func002Func001Func003C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I00H" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Move_Func001Func002Func001Func004C = (): boolean => {


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_FLYABILITY ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Move_Func001Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) < 5 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_HomingUnit ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Move_Func001Func002A = (): void => {


	if ( ( Trig_Bladestorm_Move_Func001Func002Func001C() ) ) {

		udg_TempPoint = GetUnitLoc( GetEnumUnit() );
		udg_TempPoint2 = GetUnitLoc( udg_HomingUnit );

		if ( ( Trig_Bladestorm_Move_Func001Func002Func001Func003C() ) ) {

			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 8, AngleBetweenPoints( udg_TempPoint, udg_TempPoint2 ) );

		} else {


			if ( ( Trig_Bladestorm_Move_Func001Func002Func001Func003Func002C() ) ) {

				udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 9, AngleBetweenPoints( udg_TempPoint, udg_TempPoint2 ) );

			} else {

				udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 7, AngleBetweenPoints( udg_TempPoint, udg_TempPoint2 ) );

			}


		}


		if ( ( Trig_Bladestorm_Move_Func001Func002Func001Func004C() ) ) {

			SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint3 ) )
			SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint3 ) )

		} else {

			SetUnitMoveSpeed( GetEnumUnit(), GetUnitDefaultMoveSpeed( GetEnumUnit() ) )
			SetUnitPathing( GetEnumUnit(), true )
			GroupRemoveUnitSimple( GetEnumUnit(), udg_BladeGroup )

		}

		RemoveLocation( udg_TempPoint )
		RemoveLocation( udg_TempPoint2 )
		RemoveLocation( udg_TempPoint3 )

	} else {

		SetUnitMoveSpeed( GetEnumUnit(), GetUnitDefaultMoveSpeed( GetEnumUnit() ) )
		SetUnitPathing( GetEnumUnit(), true )
		GroupRemoveUnitSimple( GetEnumUnit(), udg_BladeGroup )
		UnitRemoveAbilityBJ( FourCC( "A00X" ), GetEnumUnit() )
		udg_TempPoint = GetUnitLoc( GetEnumUnit() );
		SetUnitPositionLoc( GetEnumUnit(), udg_TempPoint )
		RemoveLocation( udg_TempPoint )

	}


};


const Trig_Bladestorm_Move_Func001C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_BladeGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bladestorm_Move_Actions = (): void => {


	if ( ( Trig_Bladestorm_Move_Func001C() ) ) {

		ForGroupBJ( udg_BladeGroup, Trig_Bladestorm_Move_Func001Func002A )

	} else {

		DisableTrigger( GetTriggeringTrigger() )

	}


};


//===========================================================================
const InitTrig_Bladestorm_Move = (): void => {

	gg_trg_Bladestorm_Move = CreateTrigger();
	DisableTrigger( gg_trg_Bladestorm_Move )
	TriggerRegisterTimerEventPeriodic( gg_trg_Bladestorm_Move, 0.03 )
	TriggerAddAction( gg_trg_Bladestorm_Move, Trig_Bladestorm_Move_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Bladestorm_Move();

} );
