
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Modify Time
//===========================================================================
const Trig_Modify_Time_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 0 ] === 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Modify_Time_Actions = (): void => {

	udg_RoundInfo[ 0 ] = 1;
	DialogClearBJ( udg_Dialog )
	DialogSetMessageBJ( udg_Dialog, "TRIGSTR_163" )
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_925" )
	udg_Button[ 10 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_165" )
	udg_Button[ 1 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_167" )
	udg_Button[ 2 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_166" )
	udg_Button[ 3 ] = GetLastCreatedButtonBJ();
	DialogDisplayBJ( true, udg_Dialog, udg_Host )

};


//===========================================================================
const InitTrig_Modify_Time = (): void => {

	gg_trg_Modify_Time = CreateTrigger();
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 0 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 1 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 2 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 3 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 4 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 5 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 6 ) )
	TriggerRegisterPlayerEventEndCinematic( gg_trg_Modify_Time, Player( 7 ) )
	TriggerAddCondition( gg_trg_Modify_Time, Condition( Trig_Modify_Time_Conditions ) )
	TriggerAddAction( gg_trg_Modify_Time, Trig_Modify_Time_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Modify_Time();

} );
