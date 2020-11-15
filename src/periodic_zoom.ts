

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Periodic Zoom
//===========================================================================
const Trig_Periodic_Zoom_Func001A = (): void => {

	SetCameraFieldForPlayer( GetEnumPlayer(), CAMERA_FIELD_TARGET_DISTANCE, I2R( GetPlayerState( GetEnumPlayer(), PLAYER_STATE_RESOURCE_LUMBER ) ), 0 )
	SetCameraFieldForPlayer( GetEnumPlayer(), CAMERA_FIELD_ANGLE_OF_ATTACK, 304, 0 )

};


const Trig_Periodic_Zoom_Func002A = (): void => {

	SetCameraFieldForPlayer( GetEnumPlayer(), CAMERA_FIELD_TARGET_DISTANCE, I2R( GetPlayerState( GetEnumPlayer(), PLAYER_STATE_RESOURCE_LUMBER ) ), 0 )
	SetCameraFieldForPlayer( GetEnumPlayer(), CAMERA_FIELD_ANGLE_OF_ATTACK, 304, 0 )

};


const Trig_Periodic_Zoom_Actions = (): void => {

	ForForce( udg_Sheep, Trig_Periodic_Zoom_Func001A )
	ForForce( udg_Spirit, Trig_Periodic_Zoom_Func002A )

};


//===========================================================================
const InitTrig_Periodic_Zoom = (): void => {

	gg_trg_Periodic_Zoom = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Periodic_Zoom, 0.5 )
	TriggerAddAction( gg_trg_Periodic_Zoom, Trig_Periodic_Zoom_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Periodic_Zoom();
} );
