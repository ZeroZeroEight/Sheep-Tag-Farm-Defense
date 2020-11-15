

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: End
//===========================================================================
const Trig_End_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}

	return true;

};


const Trig_End_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		CustomDefeatBJ( ConvertedPlayer( GetForLoopIndexA() ), "TRIGSTR_344" )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_End = (): void => {

	gg_trg_End = CreateTrigger();
	DisableTrigger( gg_trg_End )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 0 ), "-end", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_End, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_End, Condition( Trig_End_Conditions ) )
	TriggerAddAction( gg_trg_End, Trig_End_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_End();

} );
