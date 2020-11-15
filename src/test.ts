
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Test
//===========================================================================
const Trig_Test_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( GetEventPlayerChatString(), 1, 5 ) === "-test" ) ) ) {

		return false;

	}


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}

	return true;

};


const Trig_Test_Actions = (): void => {

	udg_RoundInfo[ 1 ] = S2I( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) );

};


//===========================================================================
const InitTrig_Test = (): void => {

	gg_trg_Test = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Test, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Test, Condition( Trig_Test_Conditions ) )
	TriggerAddAction( gg_trg_Test, Trig_Test_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Test();

} );
