import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Win
//===========================================================================
const Trig_Win_Func008002002 = (): boolean => {

	return ( GetOwningPlayer( GetFilterUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) );

};


const Trig_Win_Func009A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Win_Actions = (): void => {

	ClearTextMessagesBJ( GetPlayersAll() )
	DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_343" )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                                                                       " + udg_SetupString[ 1 ] ) )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                                                                       " + udg_SetupString[ 2 ] ) )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                                                                       " + udg_SetupString[ 3 ] ) )
	DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_990" )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                                                                       |Cffffcc00Or, " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r|cffffcc00 may type|r -end |cffffcc00to end the game." ) ) ) )
	udg_TempGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Win_Func008002002 ) );
	ForGroupBJ( udg_TempGroup, Trig_Win_Func009A )
	DestroyGroup( udg_TempGroup )
	TriggerSleepAction( 5 )
	ConditionalTriggerExecute( gg_trg_Begin_New_Game )

};


//===========================================================================
const InitTrig_Win = (): void => {

	gg_trg_Win = CreateTrigger();
	TriggerAddAction( gg_trg_Win, Trig_Win_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Win();

} );
