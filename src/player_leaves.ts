
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Player Leaves
//===========================================================================
const Trig_Player_Leaves_Func004A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Player_Leaves_Actions = (): void => {

	ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Sheep )
	ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Spirit )
	udg_TempGroup = GetUnitsOfPlayerAll( GetTriggerPlayer() );
	ForGroupBJ( udg_TempGroup, Trig_Player_Leaves_Func004A )
	DestroyGroup( udg_TempGroup )
	DisplayTimedTextToForce( GetPlayersAll(), 10, ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|r|cffffcc00 has left the game." ) ) )
	ConditionalTriggerExecute( gg_trg_Leaderboard )

};


//===========================================================================
const InitTrig_Player_Leaves = (): void => {

	gg_trg_Player_Leaves = CreateTrigger();
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 0 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 1 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 2 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 3 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 4 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 5 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 6 ) )
	TriggerRegisterPlayerEventLeave( gg_trg_Player_Leaves, Player( 7 ) )
	TriggerAddAction( gg_trg_Player_Leaves, Trig_Player_Leaves_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Player_Leaves();
} );
