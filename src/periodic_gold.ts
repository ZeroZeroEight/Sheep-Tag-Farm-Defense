
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Periodic Gold
//===========================================================================
const Trig_Periodic_Gold_Func001A = (): void => {

	AdjustPlayerStateBJ( udg_Income[ GetConvertedPlayerId( GetEnumPlayer() ) ], GetEnumPlayer(), PLAYER_STATE_RESOURCE_GOLD )
	SetPlayerStateBJ( GetEnumPlayer(), PLAYER_STATE_RESOURCE_FOOD_USED, udg_Income[ GetConvertedPlayerId( GetEnumPlayer() ) ] )

};


const Trig_Periodic_Gold_Actions = (): void => {

	ForForce( udg_Sheep, Trig_Periodic_Gold_Func001A )

};


//===========================================================================
const InitTrig_Periodic_Gold = (): void => {

	gg_trg_Periodic_Gold = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Periodic_Gold, 4 )
	TriggerAddAction( gg_trg_Periodic_Gold, Trig_Periodic_Gold_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Periodic_Gold();
} );
