
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Leaderboard
//===========================================================================
const Trig_Leaderboard_Func001Func005Func001Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "h" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Leaderboard_Func001Func005Func001C = (): boolean => {


	if ( ( ! ( IsPlayerInForce( ConvertedPlayer( GetForLoopIndexA() ), udg_Sheep ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Leaderboard_Func001Func008Func001C = (): boolean => {


	if ( ( ! ( IsPlayerInForce( ConvertedPlayer( GetForLoopIndexA() ), udg_Spirit ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Leaderboard_Func001Func013C = (): boolean => {


	if ( ( ! ( udg_EscToggle[ GetConvertedPlayerId( GetEnumPlayer() ) ] === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Leaderboard_Func001A = (): void => {

	CreateLeaderboardBJ( GetForceOfPlayer( GetEnumPlayer() ), "TRIGSTR_084" )
	LeaderboardSetStyleBJ( PlayerGetLeaderboardBJ( GetEnumPlayer() ), true, true, false, false )
	LeaderboardAddItemBJ( Player( PLAYER_NEUTRAL_AGGRESSIVE ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), "TRIGSTR_086", 0 )
	LeaderboardSetPlayerItemLabelColorBJ( Player( PLAYER_NEUTRAL_AGGRESSIVE ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), 100, 100, 100, 0 )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Leaderboard_Func001Func005Func001C() ) ) {


			if ( ( Trig_Leaderboard_Func001Func005Func001Func001C() ) ) {

				LeaderboardAddItemBJ( ConvertedPlayer( GetForLoopIndexA() ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), ( GetPlayerName( GetEnumPlayer() ) + ( " (" + ( I2S( udg_Revives[ GetConvertedPlayerId( GetEnumPlayer() ) ] ) + " revives)" ) ) ), 0 )

			} else {

				LeaderboardAddItemBJ( ConvertedPlayer( GetForLoopIndexA() ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), GetPlayerName( ConvertedPlayer( GetForLoopIndexA() ) ), 0 )

			}


		} else {

		null

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	LeaderboardAddItemBJ( Player( bj_PLAYER_NEUTRAL_VICTIM ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), "TRIGSTR_087", 0 )
	LeaderboardSetPlayerItemLabelColorBJ( Player( bj_PLAYER_NEUTRAL_VICTIM ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), 100, 100, 100, 0 )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Leaderboard_Func001Func008Func001C() ) ) {

			LeaderboardAddItemBJ( ConvertedPlayer( GetForLoopIndexA() ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), GetPlayerName( ConvertedPlayer( GetForLoopIndexA() ) ), 0 )

		} else {

		null

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	LeaderboardAddItemBJ( Player( bj_PLAYER_NEUTRAL_EXTRA ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), ( udg_SetupString[ 0 ] + ( " (" + ( I2S( udg_Continue[ 1 ] ) + " continue(s))" ) ) ), 0 )
	LeaderboardSetPlayerItemLabelColorBJ( Player( bj_PLAYER_NEUTRAL_EXTRA ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), 100, 100, 100, 0 )
	LeaderboardAddItemBJ( Player( PLAYER_NEUTRAL_PASSIVE ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), ( "Round " + I2S( udg_RoundInfo[ 1 ] ) ), 0 )
	LeaderboardSetPlayerItemLabelColorBJ( Player( PLAYER_NEUTRAL_PASSIVE ), PlayerGetLeaderboardBJ( GetEnumPlayer() ), 100, 100, 100, 0 )

	if ( ( Trig_Leaderboard_Func001Func013C() ) ) {

		LeaderboardDisplayBJ( false, PlayerGetLeaderboardBJ( GetEnumPlayer() ) )

	} else {

	null

	}


};


const Trig_Leaderboard_Actions = (): void => {

	ForForce( GetPlayersAll(), Trig_Leaderboard_Func001A )

};


//===========================================================================
const InitTrig_Leaderboard = (): void => {

	gg_trg_Leaderboard = CreateTrigger();
	TriggerAddAction( gg_trg_Leaderboard, Trig_Leaderboard_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Leaderboard();

} );

