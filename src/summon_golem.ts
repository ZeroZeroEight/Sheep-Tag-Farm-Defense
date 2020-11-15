
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Summon Golem
//===========================================================================
const Trig_Summon_Golem_Func001C = (): boolean => {


	if ( ( ( UnitHasItemOfTypeBJ( GetAttacker(), FourCC( "I00D" ) ) === true ) ) ) {

		return true;

	}


	if ( ( ( UnitHasItemOfTypeBJ( GetAttacker(), FourCC( "I00C" ) ) === true ) ) ) {

		return true;

	}


	if ( ( ( UnitHasItemOfTypeBJ( GetAttacker(), FourCC( "I007" ) ) === true ) ) ) {

		return true;

	}

	return false;

};


const Trig_Summon_Golem_Conditions = (): boolean => {


	if ( ( ! Trig_Summon_Golem_Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Summon_Golem_Func002C = (): boolean => {


	if ( ( ! ( GetRandomInt( 1, 20 ) <= 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Summon_Golem_Actions = (): void => {


	if ( ( Trig_Summon_Golem_Func002C() ) ) {

		udg_TempPoint = GetUnitLoc( GetAttacker() );
		CreateNUnitsAtLoc( 1, FourCC( "h009" ), GetOwningPlayer( GetAttacker() ), udg_TempPoint, GetUnitFacing( GetAttacker() ) )
		UnitApplyTimedLifeBJ( 0.3, FourCC( "BTLF" ), GetLastCreatedUnit() )
		UnitAddItemByIdSwapped( FourCC( "I00B" ), GetLastCreatedUnit() )
		UnitUseItem( GetLastCreatedUnit(), GetLastCreatedItem() )
		RemoveLocation( udg_TempPoint )

	} else {

	null

	}


};


//===========================================================================
const InitTrig_Summon_Golem = (): void => {

	gg_trg_Summon_Golem = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Summon_Golem, EVENT_PLAYER_UNIT_ATTACKED )
	TriggerAddCondition( gg_trg_Summon_Golem, Condition( Trig_Summon_Golem_Conditions ) )
	TriggerAddAction( gg_trg_Summon_Golem, Trig_Summon_Golem_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Summon_Golem();

} );
