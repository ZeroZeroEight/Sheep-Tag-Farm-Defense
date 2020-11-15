
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";



//===========================================================================
// Trigger: Initial Timer
//===========================================================================
const Trig_Initial_Timer_Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Initial_Timer_Actions = (): void => {


	if ( ( Trig_Initial_Timer_Func001C() ) ) {

		StartTimerBJ( udg_InitialTimer, false, 30 )

	} else {

		StartTimerBJ( udg_InitialTimer, false, 10 )

	}

	CreateTimerDialogBJ( GetLastCreatedTimerBJ(), "TRIGSTR_181" )

};


//===========================================================================
const InitTrig_Initial_Timer = (): void => {

	gg_trg_Initial_Timer = CreateTrigger();
	TriggerRegisterTimerEventSingle( gg_trg_Initial_Timer, 0.1 )
	TriggerAddAction( gg_trg_Initial_Timer, Trig_Initial_Timer_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Initial_Timer();

} );
