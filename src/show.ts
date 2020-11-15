
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Show
//===========================================================================
const Trig_Show_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, StringLength( GetEventPlayerChatString() ) ) === SubStringBJ( "-show", 1, StringLength( GetEventPlayerChatString() ) ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Show_Actions = (): void => {

	udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = true;
	LeaderboardDisplayBJ( true, PlayerGetLeaderboardBJ( GetTriggerPlayer() ) )

};


//===========================================================================
const InitTrig_Show = (): void => {

	gg_trg_Show = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Show, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Show, Condition( Trig_Show_Conditions ) )
	TriggerAddAction( gg_trg_Show, Trig_Show_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Show();
} );
