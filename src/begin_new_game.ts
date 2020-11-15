
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Begin New Game
//===========================================================================
const Trig_Begin_New_Game_Func002C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Begin_New_Game_Actions = (): void => {

	EnableTrigger( gg_trg_End )

	if ( ( Trig_Begin_New_Game_Func002C() ) ) {

		udg_Continue[ 0 ] = 0;

	} else {

		udg_Continue[ 0 ] = udg_RoundInfo[ 1 ];

	}

	TriggerSleepAction( 5 )
	DisableTrigger( gg_trg_End )
	udg_RoundInfo[ 0 ] = 0;
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		DestroyLeaderboardBJ( PlayerGetLeaderboardBJ( ConvertedPlayer( GetForLoopIndexA() ) ) )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	ConditionalTriggerExecute( gg_trg_Reset_Game )
	ConditionalTriggerExecute( gg_trg_Initial_Timer )
	EnableTrigger( gg_trg_Lose )

};


//===========================================================================
const InitTrig_Begin_New_Game = (): void => {

	gg_trg_Begin_New_Game = CreateTrigger();
	TriggerAddAction( gg_trg_Begin_New_Game, Trig_Begin_New_Game_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Begin_New_Game();

} );
