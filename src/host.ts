
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Host
//===========================================================================
const Trig_Host_Conditions = (): boolean => {


	if ( ( ! ( GetPlayerSlotState( udg_Host ) !== PLAYER_SLOT_STATE_PLAYING ) ) ) {

		return false;

	}

	return true;

};


const Trig_Host_Func001Func001Func003Func001C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Host_Func001Func001Func003C = (): boolean => {


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


const Trig_Host_Func001Func001C = (): boolean => {


	if ( ( ! ( GetPlayerSlotState( ConvertedPlayer( GetForLoopIndexA() ) ) === PLAYER_SLOT_STATE_PLAYING ) ) ) {

		return false;

	}

	return true;

};


const Trig_Host_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Host_Func001Func001C() ) ) {

			udg_Host = ConvertedPlayer( GetForLoopIndexA() );
			ClearTextMessagesBJ( GetPlayersAll() )

			if ( ( Trig_Host_Func001Func001Func003C() ) ) {

				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |cffffcc00Continue used! The game will begin at round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00." ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00You have|r " + ( I2S( udg_Continue[ 1 ] ) + "|cffffcc00 continue(s) remaining." ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1137" )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00may type|r -cancel |cffffcc00to restart the game." ) ) ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1138" )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
				DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

			} else {


				if ( ( Trig_Host_Func001Func001Func003Func001C() ) ) {

					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1135" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1136" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

				} else {

					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1134" )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
					DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

				}


			}

			return;

		} else {

		null

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Host = (): void => {

	gg_trg_Host = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Host, 2 )
	TriggerAddCondition( gg_trg_Host, Condition( Trig_Host_Conditions ) )
	TriggerAddAction( gg_trg_Host, Trig_Host_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Host();

} );

addScriptHook( W3TS_HOOK.MAIN_INIT, (): void => {

  ConditionalTriggerExecute(gg_trg_Host);

} );
