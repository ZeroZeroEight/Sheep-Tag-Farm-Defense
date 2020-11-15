
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Autozoom
//===========================================================================
const Trig_Autozoom_Func001Func001C = (): boolean => {


	if ( ( ! ( StringCase( GetPlayerName( ConvertedPlayer( GetForLoopIndexA() ) ), false ) === "madhatters" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Autozoom_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Autozoom_Func001Func001C() ) ) {

			SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_LUMBER, 2500 )
			SetCameraFieldForPlayer( ConvertedPlayer( GetForLoopIndexA() ), CAMERA_FIELD_TARGET_DISTANCE, 2500, 0 )

		} else {

		null

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Autozoom = (): void => {

	gg_trg_Autozoom = CreateTrigger();
	TriggerRegisterTimerEventSingle( gg_trg_Autozoom, 1 )
	TriggerAddAction( gg_trg_Autozoom, Trig_Autozoom_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Autozoom();
} );
