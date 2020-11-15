
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Zombie Remove
//===========================================================================
const Trig_Zombie_Remove_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "n004" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zombie_Remove_Actions = (): void => {

	TriggerSleepAction( 0.5 )
	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Zombie_Remove = (): void => {

	gg_trg_Zombie_Remove = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Zombie_Remove, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_Zombie_Remove, Condition( Trig_Zombie_Remove_Conditions ) )
	TriggerAddAction( gg_trg_Zombie_Remove, Trig_Zombie_Remove_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Zombie_Remove();

} );
