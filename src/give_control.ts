
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Give Control
//===========================================================================
const Trig_Give_Control_Func003Func001C = (): boolean => {


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) < 9 ) ) ) {

		return false;

	}


	if ( ( ! ( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) !== GetConvertedPlayerId( GetTriggerPlayer() ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func003C = (): boolean => {


	if ( ( Trig_Give_Control_Func003Func001C() ) ) {

		return true;

	}


	if ( ( ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 4, 6 ) === "all" ) ) ) {

		return true;

	}


	if ( ( ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 3, 5 ) === "all" ) ) ) {

		return true;

	}

	return false;

};


const Trig_Give_Control_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, 2 ) === "-c" ) ) ) {

		return false;

	}


	if ( ( ! Trig_Give_Control_Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( ConvertedPlayer( GetForLoopIndexA() ) !== GetTriggerPlayer() ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001Func001Func004Func001C = (): boolean => {


	if ( ( ! ( ConvertedPlayer( GetForLoopIndexA() ) !== GetTriggerPlayer() ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001Func001C = (): boolean => {


	if ( ( ! ( udg_ControlBoolean[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001Func002C = (): boolean => {


	if ( ( ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 4, 6 ) === "all" ) ) ) {

		return true;

	}


	if ( ( ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 3, 5 ) === "all" ) ) ) {

		return true;

	}

	return false;

};


const Trig_Give_Control_Func001Func004Func001C = (): boolean => {


	if ( ( ! ( GetPlayerAlliance( GetTriggerPlayer(), udg_Player[ 0 ], ALLIANCE_SHARED_ADVANCED_CONTROL ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001Func004C = (): boolean => {


	if ( ( ! ( IsPlayerInForce( udg_Player[ 0 ], udg_Sheep ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Func001C = (): boolean => {


	if ( ( ! Trig_Give_Control_Func001Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Give_Control_Actions = (): void => {


	if ( ( Trig_Give_Control_Func001C() ) ) {


		if ( ( Trig_Give_Control_Func001Func001C() ) ) {

			bj_forLoopAIndex = 1;
			bj_forLoopAIndexEnd = 8;

			while ( true ) {

				if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

				if ( ( Trig_Give_Control_Func001Func001Func004Func001C() ) ) {

					SetPlayerAllianceBJ( GetTriggerPlayer(), ALLIANCE_SHARED_ADVANCED_CONTROL, true, ConvertedPlayer( GetForLoopIndexA() ) )
					DisplayTimedTextToForce( GetForceOfPlayer( ConvertedPlayer( GetForLoopIndexA() ) ), 7, ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|r|cffffcc00 gave control to you" ) ) )

				} else {

				null

				}

				bj_forLoopAIndex = bj_forLoopAIndex + 1;

			}


			udg_ControlBoolean[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = true;
			DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, "TRIGSTR_012" )

		} else {

			bj_forLoopAIndex = 1;
			bj_forLoopAIndexEnd = 8;

			while ( true ) {

				if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

				if ( ( Trig_Give_Control_Func001Func001Func001Func001C() ) ) {

					SetPlayerAllianceBJ( GetTriggerPlayer(), ALLIANCE_SHARED_ADVANCED_CONTROL, false, ConvertedPlayer( GetForLoopIndexA() ) )
					DisplayTimedTextToForce( GetForceOfPlayer( ConvertedPlayer( GetForLoopIndexA() ) ), 7, ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|r|cffffcc00 took control from you" ) ) )

				} else {

				null

				}

				bj_forLoopAIndex = bj_forLoopAIndex + 1;

			}


			udg_ControlBoolean[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = false;
			DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, "TRIGSTR_013" )

		}


	} else {

		udg_Player[ 0 ] = ConvertedPlayer( S2I( SubStringBJ( GetEventPlayerChatString(), 4, 4 ) ) );

		if ( ( Trig_Give_Control_Func001Func004C() ) ) {


			if ( ( Trig_Give_Control_Func001Func004Func001C() ) ) {

				SetPlayerAllianceBJ( GetTriggerPlayer(), ALLIANCE_SHARED_ADVANCED_CONTROL, false, udg_Player[ 0 ] )
				DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You took control from |r" + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Player[ 0 ] ) ] + GetPlayerName( udg_Player[ 0 ] ) ) ) )
				DisplayTimedTextToForce( GetForceOfPlayer( udg_Player[ 0 ] ), 7, ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|r|cffffcc00 took control from you" ) ) )

			} else {

				SetPlayerAllianceBJ( GetTriggerPlayer(), ALLIANCE_SHARED_ADVANCED_CONTROL, true, udg_Player[ 0 ] )
				DisplayTimedTextToForce( GetForceOfPlayer( GetTriggerPlayer() ), 7, ( "|cffffcc00You gave control to |r" + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Player[ 0 ] ) ] + GetPlayerName( udg_Player[ 0 ] ) ) ) )
				DisplayTimedTextToForce( GetForceOfPlayer( udg_Player[ 0 ] ), 7, ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|r|cffffcc00 gave control to you" ) ) )

			}


		} else {

		null

		}


	}


};


//===========================================================================
const InitTrig_Give_Control = (): void => {

	gg_trg_Give_Control = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Give_Control, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Give_Control, Condition( Trig_Give_Control_Conditions ) )
	TriggerAddAction( gg_trg_Give_Control, Trig_Give_Control_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Give_Control();
} );
