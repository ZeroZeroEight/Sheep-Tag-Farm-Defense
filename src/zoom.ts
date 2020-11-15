
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Zoom
//===========================================================================
const Trig_Zoom_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, 6 ) === "-zoom " ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zoom_Func001Func004C = (): boolean => {


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) ) < 2500 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zoom_Func001C = (): boolean => {


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) ) > 1200 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zoom_Actions = (): void => {

  



	if ( ( Trig_Zoom_Func001C() ) ) {


		if ( ( Trig_Zoom_Func001Func004C() ) ) {

			SetPlayerStateBJ( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, S2I( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) ) )
			SetCameraFieldForPlayer( GetTriggerPlayer(), CAMERA_FIELD_TARGET_DISTANCE, S2R( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) ), 0 )
			DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You set your zoom to |r" + ( I2S( S2I( SubStringBJ( GetEventPlayerChatString(), 7, StringLength( GetEventPlayerChatString() ) ) ) ) + "|cffffcc00. Range = 1200 - 2500. Default = 1650." ) ) )

		} else {

			SetPlayerStateBJ( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, 2500 )
			SetCameraFieldForPlayer( GetTriggerPlayer(), CAMERA_FIELD_TARGET_DISTANCE, 2500, 0 )
			DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You set your zoom to |r" + ( "2500|cffffcc00. Range = 1200 - 2500. Default = 1650." ) ) )

		}


	} else {

		SetCameraFieldForPlayer( GetTriggerPlayer(), CAMERA_FIELD_TARGET_DISTANCE, 1200, 0 )
		SetPlayerStateBJ( GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, 1200 )
		DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You set your zoom to |r" + ( "1200|cffffcc00. Range = 1200 - 2500. Default = 1650." ) ) )

	}


};


//===========================================================================
const InitTrig_Zoom = (): void => {

	gg_trg_Zoom = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Zoom, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Zoom, Condition( Trig_Zoom_Conditions ) )
	TriggerAddAction( gg_trg_Zoom, Trig_Zoom_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {



  InitTrig_Zoom();
} );
