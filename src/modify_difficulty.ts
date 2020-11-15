
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Modify Difficulty
//===========================================================================
const Trig_Modify_Difficulty_Actions = (): void => {

	DialogDisplayBJ( false, udg_Dialog, udg_Host )
	DialogClearBJ( udg_Dialog )
	DialogSetMessageBJ( udg_Dialog, "TRIGSTR_173" )
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_174" )
	udg_Button[ 4 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_175" )
	udg_Button[ 5 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_176" )
	udg_Button[ 6 ] = GetLastCreatedButtonBJ();
	DialogDisplayBJ( true, udg_Dialog, udg_Host )

};


//===========================================================================
const InitTrig_Modify_Difficulty = (): void => {

	gg_trg_Modify_Difficulty = CreateTrigger();
	TriggerAddAction( gg_trg_Modify_Difficulty, Trig_Modify_Difficulty_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Modify_Difficulty();

} );

