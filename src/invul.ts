
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Invunerability
//===========================================================================
const Trig_Invunerability_Conditions = (): boolean => {


	if ( ( ! ( IsUnitType( GetTriggerUnit(), UNIT_TYPE_ANCIENT ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Invunerability_Actions = (): void => {

	SetUnitInvulnerable( GetTriggerUnit(), true )
	TriggerSleepAction( 5 )
	SetUnitInvulnerable( GetTriggerUnit(), false )

};


//===========================================================================
const InitTrig_Invunerability = (): void => {

	gg_trg_Invunerability = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Invunerability, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Invunerability, Condition( Trig_Invunerability_Conditions ) )
	TriggerAddAction( gg_trg_Invunerability, Trig_Invunerability_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Invunerability();

} );
