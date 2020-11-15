import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Cancel
//===========================================================================
const Trig_Cancel_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}


	if ( ( ! ( StringCase( GetEventPlayerChatString(), false ) === "-cancel" ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] === 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Cancel_Func013Func001C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Cancel_Func013C = (): boolean => {


	if ( ( ! ( udg_Continue[ 0 ] > 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Continue[ 0 ] < 99 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Continue[ 1 ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Cancel_Actions = (): void => {

	udg_Continue[ 0 ] = 99;
	udg_Continue[ 1 ] = 2;
	udg_RoundInfo[ 1 ] = 1;
	ClearTextMessagesBJ( GetPlayersAll() )

	if ( ( Trig_Cancel_Func013C() ) ) {

		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |cffffcc00Continue used! The game will begin at round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00You have|r " + ( I2S( udg_Continue[ 1 ] ) + "|cffffcc00 continue(s) remaining." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1153" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00may type|r -cancel |cffffcc00to restart the game." ) ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1154" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

	} else {


		if ( ( Trig_Cancel_Func013Func001C() ) ) {

			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1151" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1152" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		} else {

			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1150" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		}


	}

	DestroyTimerDialogBJ( GetLastCreatedTimerDialogBJ() )
	ConditionalTriggerExecute( gg_trg_Initial_Timer )

};


//===========================================================================
const InitTrig_Cancel = (): void => {

	gg_trg_Cancel = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Cancel, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Cancel, Condition( Trig_Cancel_Conditions ) )
	TriggerAddAction( gg_trg_Cancel, Trig_Cancel_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Cancel();

} );
