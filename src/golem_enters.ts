
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Golem Enters
//===========================================================================
const Trig_Golem_Enters_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "n002" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Golem_Enters_Func001Func001C = (): boolean => {


	if ( ( ! ( "p" === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Golem_Enters_Func001C = (): boolean => {


	if ( ( ! ( "a" === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Golem_Enters_Actions = (): void => {


	if ( ( Trig_Golem_Enters_Func001C() ) ) {

		UnitApplyTimedLifeBJ( 5, FourCC( "BTLF" ), GetTriggerUnit() )

	} else {


		if ( ( Trig_Golem_Enters_Func001Func001C() ) ) {

			UnitApplyTimedLifeBJ( 10, FourCC( "BTLF" ), GetTriggerUnit() )

		} else {

			UnitApplyTimedLifeBJ( 15, FourCC( "BTLF" ), GetTriggerUnit() )

		}


	}


};


//===========================================================================
const InitTrig_Golem_Enters = (): void => {

	gg_trg_Golem_Enters = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Golem_Enters, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Golem_Enters, Condition( Trig_Golem_Enters_Conditions ) )
	TriggerAddAction( gg_trg_Golem_Enters, Trig_Golem_Enters_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Golem_Enters();

} );
