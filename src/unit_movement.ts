
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Unit Movement
//===========================================================================
const Trig_Unit_Movement_Func002C = (): boolean => {


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 8 ) ) ) ) {

		return true;

	}


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 9 ) ) ) ) {

		return true;

	}


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 10 ) ) ) ) {

		return true;

	}


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 11 ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_Unit_Movement_Conditions = (): boolean => {


	if ( ( ! Trig_Unit_Movement_Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Movement_Func001Func010002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Unit_Movement_Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "E007" ) ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "E00E" ) ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "E00A" ) ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "E00B" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Movement_Actions = (): void => {


	if ( ( Trig_Unit_Movement_Func001C() ) ) {

		udg_TempGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Unit_Movement_Func001Func010002002 ) );
		udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup ) );
		IssuePointOrderLocBJ( GetTriggerUnit(), "attack", udg_TempPoint )
		RemoveLocation( udg_TempPoint )
		DestroyGroup( udg_TempGroup )

	} else {

		udg_TempPoint2 = GetRectCenter( gg_rct_Fence_Zone );
		udg_TempPoint = PolarProjectionBJ( udg_TempPoint2, 3000, I2R( ( 45 + ( ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) - 8 ) * 90 ) ) ) );
		IssuePointOrderLocBJ( GetTriggerUnit(), "attack", udg_TempPoint )
		RemoveLocation( udg_TempPoint )
		RemoveLocation( udg_TempPoint2 )

	}


};


//===========================================================================
const InitTrig_Unit_Movement = (): void => {

	gg_trg_Unit_Movement = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Unit_Movement, gg_rct_Fence_Zone )
	TriggerAddCondition( gg_trg_Unit_Movement, Condition( Trig_Unit_Movement_Conditions ) )
	TriggerAddAction( gg_trg_Unit_Movement, Trig_Unit_Movement_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Unit_Movement();

} );
