
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Modify Saving
//===========================================================================
const Trig_Modify_Saving_Actions = (): void => {

	DialogDisplayBJ( false, udg_Dialog, udg_Host )
	DialogClearBJ( udg_Dialog )
	DialogSetMessageBJ( udg_Dialog, "TRIGSTR_169" )
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_170" )
	udg_Button[ 7 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_171" )
	udg_Button[ 8 ] = GetLastCreatedButtonBJ();
	DialogAddButtonBJ( udg_Dialog, "TRIGSTR_172" )
	udg_Button[ 9 ] = GetLastCreatedButtonBJ();
	DialogDisplayBJ( true, udg_Dialog, udg_Host )

};


//===========================================================================
const InitTrig_Modify_Saving = (): void => {

	gg_trg_Modify_Saving = CreateTrigger();
	TriggerAddAction( gg_trg_Modify_Saving, Trig_Modify_Saving_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Modify_Saving();

} );

