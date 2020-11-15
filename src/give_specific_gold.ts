
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Give Specific Gold
//===========================================================================
const Trig_Give_Specific_Gold_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, 1 ) === "-" ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 2, 2 ) ) > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 2, 2 ) ) < 9 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Specific_Gold_Func003Func001Func002C = (): boolean => {


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ) < GetPlayerState( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Specific_Gold_Func003Func001C = (): boolean => {


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Specific_Gold_Func003C = (): boolean => {


	if ( ( ! ( IsPlayerInForce( udg_Player[ 0 ], udg_Sheep ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Specific_Gold_Actions = (): void => {

	udg_Player[ 0 ] = ConvertedPlayer( S2I( SubStringBJ( GetEventPlayerChatString(), 2, 2 ) ) );

	if ( ( Trig_Give_Specific_Gold_Func003C() ) ) {


		if ( ( Trig_Give_Specific_Gold_Func003Func001C() ) ) {


			if ( ( Trig_Give_Specific_Gold_Func003Func001Func002C() ) ) {

				AdjustPlayerStateBJ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ), udg_Player[ 0 ], PLAYER_STATE_RESOURCE_GOLD )
				AdjustPlayerStateBJ( ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ) * - 1 ), GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD )
				DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( ( "|cffffcc00You gave  " + ( I2S( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ) ) + " gold to |r" ) ) + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Player[ 0 ] ) ] + GetPlayerName( udg_Player[ 0 ] ) ) ) )
				DisplayTimedTextToForce( GetForceOfPlayer( udg_Player[ 0 ] ), 7, ( ( "|cffffcc00You recieved " + ( I2S( S2I( SubStringBJ( GetEventPlayerChatString(), 4, StringLength( GetEventPlayerChatString() ) ) ) ) + " gold from |r" ) ) + ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + GetPlayerName( GetTriggerPlayer() ) ) ) )

			} else {

				AdjustPlayerStateBJ( GetPlayerState( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD ), udg_Player[ 0 ], PLAYER_STATE_RESOURCE_GOLD )
				DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You gave all your gold to |r" + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Player[ 0 ] ) ] + GetPlayerName( udg_Player[ 0 ] ) ) ) )
				DisplayTimedTextToForce( GetForceOfPlayer( udg_Player[ 0 ] ), 7, ( ( "|cffffcc00You recieved " + ( I2S( GetPlayerState( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD ) ) + " gold from |r" ) ) + ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + GetPlayerName( GetTriggerPlayer() ) ) ) )
				SetPlayerStateBJ( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD, 0 )

			}


		} else {

		null

		}


	} else {

	null

	}


};


//===========================================================================
const InitTrig_Give_Specific_Gold = (): void => {

	gg_trg_Give_Specific_Gold = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Specific_Gold, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Give_Specific_Gold, Condition( Trig_Give_Specific_Gold_Conditions ) )
	TriggerAddAction( gg_trg_Give_Specific_Gold, Trig_Give_Specific_Gold_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Give_Specific_Gold();
} );
