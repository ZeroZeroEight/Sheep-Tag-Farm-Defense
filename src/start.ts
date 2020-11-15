
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Start
//===========================================================================
const Trig_Start_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}


	if ( ( ! ( StringCase( GetEventPlayerChatString(), false ) === "-start" ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Start_Actions = (): void => {

	ConditionalTriggerExecute( gg_trg_Setup_Timer_Expire )

};


//===========================================================================
const InitTrig_Start = (): void => {

	gg_trg_Start = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Start, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Start, Condition( Trig_Start_Conditions ) )
	TriggerAddAction( gg_trg_Start, Trig_Start_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Start();

} );
