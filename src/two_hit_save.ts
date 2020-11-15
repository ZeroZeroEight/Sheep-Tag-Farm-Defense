
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Two Hit Save
//===========================================================================
const Trig_Two_Hit_Save_Conditions = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_LIFE, GetTriggerUnit() ) >= 100 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAlly( GetTriggerUnit(), GetOwningPlayer( GetEventDamageSource() ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Two_Hit_Save_Actions = (): void => {

	TriggerSleepAction( 0 )
	SetUnitLifeBJ( GetTriggerUnit(), 10 )

};


//===========================================================================
const InitTrig_Two_Hit_Save = (): void => {

	gg_trg_Two_Hit_Save = CreateTrigger();
	DisableTrigger( gg_trg_Two_Hit_Save )
	TriggerAddCondition( gg_trg_Two_Hit_Save, Condition( Trig_Two_Hit_Save_Conditions ) )
	TriggerAddAction( gg_trg_Two_Hit_Save, Trig_Two_Hit_Save_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Two_Hit_Save();

} );
