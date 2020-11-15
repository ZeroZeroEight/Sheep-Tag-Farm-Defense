

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Transfer
//===========================================================================
const Trig_Transfer_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}


	if ( ( ! ( StringCase( SubStringBJ( GetEventPlayerChatString(), 1, 9 ), false ) === "-transfer" ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Transfer_Func002Func002Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Transfer_Func002Func002Func002C = (): boolean => {


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


const Trig_Transfer_Func002Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 0 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Transfer_Func002C = (): boolean => {


	if ( ( ! ( udg_TempInt > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_TempInt < 13 ) ) ) {

		return false;

	}


	if ( ( ! ( GetPlayerSlotState( ConvertedPlayer( udg_TempInt ) ) === PLAYER_SLOT_STATE_PLAYING ) ) ) {

		return false;

	}

	return true;

};


const Trig_Transfer_Actions = (): void => {

	udg_TempInt = S2I( SubStringBJ( GetEventPlayerChatString(), 11, StringLength( GetEventPlayerChatString() ) ) );

	if ( ( Trig_Transfer_Func002C() ) ) {

		udg_Host = ConvertedPlayer( udg_TempInt );

		if ( ( Trig_Transfer_Func002Func002C() ) ) {

			ClearTextMessagesBJ( GetPlayersAll() )

			if ( ( Trig_Transfer_Func002Func002Func002C() ) ) {

				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |cffffcc00Continue used! The game will begin at round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00." ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00You have|r " + ( I2S( udg_Continue[ 1 ] ) + "|cffffcc00 continue(s) remaining." ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1132" )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00may type|r -cancel |cffffcc00to restart the game." ) ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1133" )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

			} else {


				if ( ( Trig_Transfer_Func002Func002Func002Func001C() ) ) {

					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1130" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1131" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

				} else {

					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1129" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

				}


			}


		} else {

			DisplayTimedTextToForce( GetPlayersAll(), 7, ( udg_PlayerColor[ udg_TempInt ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00is now host." ) ) )

		}


	} else {

	null

	}


};


//===========================================================================
const InitTrig_Transfer = (): void => {

	gg_trg_Transfer = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Transfer, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Transfer, Condition( Trig_Transfer_Conditions ) )
	TriggerAddAction( gg_trg_Transfer, Trig_Transfer_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Transfer();

} );

