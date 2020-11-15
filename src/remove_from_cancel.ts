import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";
//===========================================================================
// Trigger: Remove From Cancel
//===========================================================================
const Trig_Remove_From_Cancel_Conditions = (): boolean => {


	if ( ( ! ( IsUnitType( GetTriggerUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitInGroup( GetTriggerUnit(), udg_CancelGroup ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Remove_From_Cancel_Actions = (): void => {

	GroupRemoveUnitSimple( GetTriggerUnit(), udg_CancelGroup )

};


//===========================================================================
const InitTrig_Remove_From_Cancel = (): void => {

	gg_trg_Remove_From_Cancel = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Remove_From_Cancel, EVENT_PLAYER_UNIT_DEATH )
	TriggerRegisterAnyUnitEventBJ( gg_trg_Remove_From_Cancel, EVENT_PLAYER_UNIT_CONSTRUCT_FINISH )
	TriggerRegisterAnyUnitEventBJ( gg_trg_Remove_From_Cancel, EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL )
	TriggerRegisterLeaveRectSimple( gg_trg_Remove_From_Cancel, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Remove_From_Cancel, Condition( Trig_Remove_From_Cancel_Conditions ) )
	TriggerAddAction( gg_trg_Remove_From_Cancel, Trig_Remove_From_Cancel_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Remove_From_Cancel();
} );
