

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Reset Game
//===========================================================================
const Trig_Reset_Game_Func004003001 = (): boolean => {

	return ( GetPlayerSlotState( ConvertedPlayer( GetForLoopIndexA() ) ) === PLAYER_SLOT_STATE_PLAYING );

};


const Trig_Reset_Game_Func012Func001C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Reset_Game_Func012C = (): boolean => {


	if ( ( ! ( udg_Continue[ 0 ] > 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Continue[ 1 ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Reset_Game_Actions = (): void => {

	ClearTextMessagesBJ( GetPlayersAll() )
	udg_RoundInfo[ 1 ] = 1;
	ForceClear( udg_Spirit )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( ( GetPlayerSlotState( ConvertedPlayer( GetForLoopIndexA() ) ) === PLAYER_SLOT_STATE_PLAYING ) ) ) {

			ForceAddPlayerSimple( ConvertedPlayer( GetForLoopIndexA() ), udg_Sheep )

		} else {

			DoNothing()

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_Revives[ GetForLoopIndexA() ] = 2;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_GOLD, 0 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
	udg_TempPoint3 = OffsetLocation( udg_TempPoint, 0, 225 );
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		PanCameraToTimedLocForPlayer( ConvertedPlayer( GetForLoopIndexA() ), udg_TempPoint3, 3 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	RemoveLocation( udg_TempPoint3 )
	RemoveLocation( udg_TempPoint )

	if ( ( Trig_Reset_Game_Func012C() ) ) {

		udg_RoundInfo[ 1 ] = udg_Continue[ 0 ];
		udg_Continue[ 0 ] = 0;
		udg_Continue[ 1 ] = ( udg_Continue[ 1 ] - 1 );
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |cffffcc00Continue used! The game will begin at round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00You have|r " + ( I2S( udg_Continue[ 1 ] ) + "|cffffcc00 continue(s) remaining." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_695" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00may type|r -cancel |cffffcc00to restart the game." ) ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_868" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

	} else {


		if ( ( Trig_Reset_Game_Func012Func001C() ) ) {

			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_697" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_723" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		} else {

			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_869" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		}


	}


};


//===========================================================================
const InitTrig_Reset_Game = (): void => {

	gg_trg_Reset_Game = CreateTrigger();
	TriggerAddAction( gg_trg_Reset_Game, Trig_Reset_Game_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Reset_Game();

} );
