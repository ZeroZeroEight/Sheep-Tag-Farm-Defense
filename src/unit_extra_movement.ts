
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Unit Extra Movement
//===========================================================================
const Trig_Unit_Extra_Movement_Func001Func002Func001Func002002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Unit_Extra_Movement_Func001Func002Func001Func003Func007002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Unit_Extra_Movement_Func001Func002Func001Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Extra_Movement_Func001Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitCurrentOrder( GetEnumUnit() ) !== String2OrderIdBJ( "attack" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Extra_Movement_Func001Func002A = (): void => {


	if ( ( Trig_Unit_Extra_Movement_Func001Func002Func001C() ) ) {

		udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
		udg_TempGroup = GetUnitsInRangeOfLocMatching( 2000, udg_TempPoint2, Condition( Trig_Unit_Extra_Movement_Func001Func002Func001Func002002003 ) );

		if ( ( Trig_Unit_Extra_Movement_Func001Func002Func001Func003C() ) ) {

			DestroyGroup( udg_TempGroup )
			udg_TempGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Unit_Extra_Movement_Func001Func002Func001Func003Func007002002 ) );
			udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup ) );
			IssuePointOrderLocBJ( GetEnumUnit(), "attack", udg_TempPoint )
			RemoveLocation( udg_TempPoint )
			DestroyGroup( udg_TempGroup )

		} else {

			udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempGroup ) );
			IssuePointOrderLocBJ( GetEnumUnit(), "attack", udg_TempPoint )
			RemoveLocation( udg_TempPoint )
			DestroyGroup( udg_TempGroup )

		}

		RemoveLocation( udg_TempPoint2 )

	} else {

	null

	}


};


const Trig_Unit_Extra_Movement_Func001Func003Func002002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Unit_Extra_Movement_Func001Func003Func003Func001C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00R" ), GetEnumUnit() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Extra_Movement_Func001Func003Func003Func003C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00R" ), GetEnumUnit() ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Extra_Movement_Func001Func003Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Unit_Extra_Movement_Func001Func003A = (): void => {

	udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
	udg_TempGroup = GetUnitsInRangeOfLocMatching( 1250, udg_TempPoint2, Condition( Trig_Unit_Extra_Movement_Func001Func003Func002002003 ) );

	if ( ( Trig_Unit_Extra_Movement_Func001Func003Func003C() ) ) {


		if ( ( Trig_Unit_Extra_Movement_Func001Func003Func003Func003C() ) ) {

			UnitAddAbilityBJ( FourCC( "A00R" ), GetEnumUnit() )

		} else {

		null

		}


	} else {


		if ( ( Trig_Unit_Extra_Movement_Func001Func003Func003Func001C() ) ) {

			UnitRemoveAbilityBJ( FourCC( "A00R" ), GetEnumUnit() )

		} else {

		null

		}


	}

	DestroyGroup( udg_TempGroup )
	RemoveLocation( udg_TempPoint2 )

};


const Trig_Unit_Extra_Movement_Actions = (): void => {

	bj_forLoopAIndex = 9;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_TempGroup2 = GetUnitsOfPlayerAll( ConvertedPlayer( GetForLoopIndexA() ) );
		ForGroupBJ( udg_TempGroup2, Trig_Unit_Extra_Movement_Func001Func002A )
		ForGroupBJ( udg_TempGroup2, Trig_Unit_Extra_Movement_Func001Func003A )
		DestroyGroup( udg_TempGroup2 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Unit_Extra_Movement = (): void => {

	gg_trg_Unit_Extra_Movement = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Unit_Extra_Movement, 1 )
	TriggerAddAction( gg_trg_Unit_Extra_Movement, Trig_Unit_Extra_Movement_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Unit_Extra_Movement();

} );
