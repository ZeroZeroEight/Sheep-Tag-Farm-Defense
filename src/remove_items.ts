
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Remove Items
//===========================================================================
const Trig_Remove_Items_Actions = (): void => {

	RemoveItem( GetManipulatedItem() )

};


//===========================================================================
const InitTrig_Remove_Items = (): void => {

	gg_trg_Remove_Items = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Remove_Items, EVENT_PLAYER_UNIT_DROP_ITEM )
	TriggerAddAction( gg_trg_Remove_Items, Trig_Remove_Items_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Remove_Items();

} );
