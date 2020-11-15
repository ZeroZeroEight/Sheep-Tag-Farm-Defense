

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Weaken 9 11 12 13 14
//===========================================================================
const Trig_Weaken_9_11_12_13_14_Func001C = (): boolean => {


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E007" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00A" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00B" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00C" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00F" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "E00I" ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_Weaken_9_11_12_13_14_Func004C = (): boolean => {


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 11 ) ) ) ) {

		return true;

	}


	if ( ( ( GetOwningPlayer( GetTriggerUnit() ) === Player( 9 ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_Weaken_9_11_12_13_14_Conditions = (): boolean => {


	if ( ( ! Trig_Weaken_9_11_12_13_14_Func001C() ) ) {

		return false;

	}


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) === 1 ) ) ) {

		return false;

	}


	if ( ( ! Trig_Weaken_9_11_12_13_14_Func004C() ) ) {

		return false;

	}

	return true;

};


const Trig_Weaken_9_11_12_13_14_Actions = (): void => {

	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Weaken_9_11_12_13_14 = (): void => {

	gg_trg_Weaken_9_11_12_13_14 = CreateTrigger();
	TriggerRegisterEnterRectSimple( gg_trg_Weaken_9_11_12_13_14, GetEntireMapRect() )
	TriggerAddCondition( gg_trg_Weaken_9_11_12_13_14, Condition( Trig_Weaken_9_11_12_13_14_Conditions ) )
	TriggerAddAction( gg_trg_Weaken_9_11_12_13_14, Trig_Weaken_9_11_12_13_14_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Weaken_9_11_12_13_14();

} );
