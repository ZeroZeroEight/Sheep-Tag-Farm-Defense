
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Fence Zone
//===========================================================================
const Trig_Fence_Zone_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "e002" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Fence_Zone_Actions = (): void => {

	udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
	SetUnitPositionLoc( GetTriggerUnit(), udg_TempPoint )
	RemoveLocation( udg_TempPoint )

};


//===========================================================================
const InitTrig_Fence_Zone = (): void => {

	gg_trg_Fence_Zone = CreateTrigger();
	TriggerRegisterLeaveRectSimple( gg_trg_Fence_Zone, gg_rct_Fence_Zone )
	TriggerAddCondition( gg_trg_Fence_Zone, Condition( Trig_Fence_Zone_Conditions ) )
	TriggerAddAction( gg_trg_Fence_Zone, Trig_Fence_Zone_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Fence_Zone();
} );
