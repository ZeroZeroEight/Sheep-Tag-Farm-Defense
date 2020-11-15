
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Destroy GUI
//
// removes the a farm if the player orders it to destroy, then does the same as "FC Minus" to enable "Destroy Last Farm"
//===========================================================================
const Trig_Destroy_GUI_Conditions = (): boolean => {


	if ( ( ! ( GetTrainedUnitType() === FourCC( "n001" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_GUI_Actions = (): void => {

	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Destroy_GUI = (): void => {

	gg_trg_Destroy_GUI = CreateTrigger();
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 0 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 1 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 2 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 3 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 4 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 5 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 6 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Destroy_GUI, Player( 7 ), EVENT_PLAYER_UNIT_TRAIN_START )
	TriggerAddCondition( gg_trg_Destroy_GUI, Condition( Trig_Destroy_GUI_Conditions ) )
	TriggerAddAction( gg_trg_Destroy_GUI, Trig_Destroy_GUI_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Destroy_GUI();
} );
