
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Give Gold
//===========================================================================
const Trig_Give_Gold_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, 3 ) === "-g " ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) < 9 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Gold_Func002C = (): boolean => {


	if ( ( ! ( IsPlayerInForce( udg_Player[ 0 ], udg_Sheep ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Gold_Actions = (): void => {

	udg_Player[ 0 ] = ConvertedPlayer( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) );

	if ( ( Trig_Give_Gold_Func002C() ) ) {

		AdjustPlayerStateBJ( GetPlayerState( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD ), udg_Player[ 0 ], PLAYER_STATE_RESOURCE_GOLD )
		DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You gave all your gold to |r" + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Player[ 0 ] ) ] + GetPlayerName( udg_Player[ 0 ] ) ) ) )
		DisplayTimedTextToForce( GetForceOfPlayer( udg_Player[ 0 ] ), 7, ( ( "|cffffcc00You recieved " + ( I2S( GetPlayerState( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD ) ) + " gold from |r" ) ) + ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + GetPlayerName( GetTriggerPlayer() ) ) ) )
		SetPlayerStateBJ( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_GOLD, 0 )

	} else {

	null

	}


};


//===========================================================================
const InitTrig_Give_Gold = (): void => {

	gg_trg_Give_Gold = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Gold, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Give_Gold, Condition( Trig_Give_Gold_Conditions ) )
	TriggerAddAction( gg_trg_Give_Gold, Trig_Give_Gold_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Give_Gold();
} );
