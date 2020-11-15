import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Full Control
//===========================================================================
const Trig_Full_Control_Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetPlayerAlliance( ConvertedPlayer( GetForLoopIndexA() ), GetEnumPlayer(), ALLIANCE_SHARED_CONTROL ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Full_Control_Func001A = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Full_Control_Func001Func001Func001C() ) ) {

			SetPlayerAllianceBJ( ConvertedPlayer( GetForLoopIndexA() ), ALLIANCE_SHARED_ADVANCED_CONTROL, true, GetEnumPlayer() )

		} else {

		null

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


const Trig_Full_Control_Actions = (): void => {

	ForForce( GetPlayersAll(), Trig_Full_Control_Func001A )

};


//===========================================================================
const InitTrig_Full_Control = (): void => {

	gg_trg_Full_Control = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Full_Control, 0.3 )
	TriggerAddAction( gg_trg_Full_Control, Trig_Full_Control_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Full_Control();
} );
