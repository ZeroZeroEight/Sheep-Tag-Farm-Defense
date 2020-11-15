
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Mirror Images
//===========================================================================
const Trig_Mirror_Images_Conditions = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 16 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Mirror_Images_Func002Func001Func003C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I005" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Mirror_Images_Func002Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Mirror_Images_Func002A = (): void => {


	if ( ( Trig_Mirror_Images_Func002Func001C() ) ) {

		SetUnitManaPercentBJ( GetEnumUnit(), 100 )
		SetUnitLifePercentBJ( GetEnumUnit(), 100 )

		if ( ( Trig_Mirror_Images_Func002Func001Func003C() ) ) {

			IncUnitAbilityLevelSwapped( FourCC( "A00Y" ), GetEnumUnit() )

		} else {

		null

		}

		IssueImmediateOrderBJ( GetEnumUnit(), "mirrorimage" )

	} else {

	null

	}


};


const Trig_Mirror_Images_Func006C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) === 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Mirror_Images_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00G" ) );
	ForGroupBJ( udg_TempGroup, Trig_Mirror_Images_Func002A )
	DestroyGroup( udg_TempGroup )
	TriggerSleepAction( 3 )
	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00G" ) );

	if ( ( Trig_Mirror_Images_Func006C() ) ) {

		StartTimerBJ( udg_RobotTimer, false, 10 )

	} else {

	null

	}

	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Mirror_Images = (): void => {

	gg_trg_Mirror_Images = CreateTrigger();
	TriggerRegisterTimerExpireEventBJ( gg_trg_Mirror_Images, udg_RobotTimer )
	TriggerAddCondition( gg_trg_Mirror_Images, Condition( Trig_Mirror_Images_Conditions ) )
	TriggerAddAction( gg_trg_Mirror_Images, Trig_Mirror_Images_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Mirror_Images();

} );
