
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Remove Out Of Bounds Missiles
//===========================================================================
const Trig_Remove_Out_Of_Bounds_Missiles_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "h008" ) ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( GetTriggerUnit() ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Remove_Out_Of_Bounds_Missiles_Actions = (): void => {

	KillUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Remove_Out_Of_Bounds_Missiles = (): void => {

	gg_trg_Remove_Out_Of_Bounds_Missiles = CreateTrigger();
	TriggerRegisterLeaveRectSimple( gg_trg_Remove_Out_Of_Bounds_Missiles, gg_rct_Entire_Map )
	TriggerAddCondition( gg_trg_Remove_Out_Of_Bounds_Missiles, Condition( Trig_Remove_Out_Of_Bounds_Missiles_Conditions ) )
	TriggerAddAction( gg_trg_Remove_Out_Of_Bounds_Missiles, Trig_Remove_Out_Of_Bounds_Missiles_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Remove_Out_Of_Bounds_Missiles();

} );
