

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Computer Share
//===========================================================================
const Trig_Computer_Share_Conditions = (): boolean => {


	if ( ( ! ( IsUnitType( GetTriggerUnit(), UNIT_TYPE_ANCIENT ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( GetPlayerController( GetOwningPlayer( GetTriggerUnit() ) ) === MAP_CONTROL_COMPUTER ) ) ) {

		return false;

	}

	return true;

};


const Trig_Computer_Share_Actions = (): void => {

	ShareEverythingWithTeam( GetOwningPlayer( GetTriggerUnit() ) )

};


//===========================================================================
const InitTrig_Computer_Share = (): void => {

	gg_trg_Computer_Share = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Computer_Share, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Computer_Share, Condition( Trig_Computer_Share_Conditions ) )
	TriggerAddAction( gg_trg_Computer_Share, Trig_Computer_Share_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Computer_Share();
} );
