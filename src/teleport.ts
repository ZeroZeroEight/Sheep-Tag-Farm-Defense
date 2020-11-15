
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Teleport
//===========================================================================
const Trig_Teleport_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "h00G" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Teleport_Func002Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Teleport_Func002A = (): void => {


	if ( ( Trig_Teleport_Func002Func001C() ) ) {

		udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
		SetUnitPositionLoc( GetEnumUnit(), udg_TempPoint )
		RemoveLocation( udg_TempPoint )

	} else {

	null

	}


};


const Trig_Teleport_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00H" ) );
	ForGroupBJ( udg_TempGroup, Trig_Teleport_Func002A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Teleport = (): void => {

	gg_trg_Teleport = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Teleport, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_Teleport, Condition( Trig_Teleport_Conditions ) )
	TriggerAddAction( gg_trg_Teleport, Trig_Teleport_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Teleport();

} );
