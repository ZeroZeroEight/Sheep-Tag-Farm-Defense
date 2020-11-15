
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Hide
//===========================================================================
const Trig_Hide_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, StringLength( GetEventPlayerChatString() ) ) === SubStringBJ( "-hide", 1, StringLength( GetEventPlayerChatString() ) ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Hide_Actions = (): void => {

	udg_EscToggle[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = false;
	LeaderboardDisplayBJ( false, PlayerGetLeaderboardBJ( GetTriggerPlayer() ) )

};


//===========================================================================
const InitTrig_Hide = (): void => {

	gg_trg_Hide = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Hide, Condition( Trig_Hide_Conditions ) )
	TriggerAddAction( gg_trg_Hide, Trig_Hide_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Hide();
} );
