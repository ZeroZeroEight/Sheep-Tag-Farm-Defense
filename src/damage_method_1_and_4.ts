import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Damage Method 1 And 4
//===========================================================================
const Trig_Damage_Method_1_And_4_Func001002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Damage_Method_1_And_4_Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] < 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func001Func002Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func001Func002C = (): boolean => {


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002Func003C = (): boolean => {


	if ( ( ! ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002Func004C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002Func005C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002Func001Func002C = (): boolean => {


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func002Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func002Func002C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func002Func003C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func002Func004C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func002Func005C() ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetEnumUnit() ) === FourCC( "e002" ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_Damage_Method_1_And_4_Func002Func001C = (): boolean => {


	if ( ( ! Trig_Damage_Method_1_And_4_Func002Func001Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Func002A = (): void => {


	if ( ( Trig_Damage_Method_1_And_4_Func002Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup2 )

	} else {


		if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func001C() ) ) {


			if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func001Func002C() ) ) {


				if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func001Func002Func003C() ) ) {

					UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

				} else {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

				}


			} else {


				if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func001Func002Func001C() ) ) {

					UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), ( udg_Damage[ udg_LoopIndex ] * - 1 ), udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

				} else {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + udg_Damage[ udg_LoopIndex ] ) )

				}


			}


		} else {


			if ( ( Trig_Damage_Method_1_And_4_Func002Func001Func001Func001C() ) ) {

				UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

			} else {

				SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

			}


		}


	}


};


const Trig_Damage_Method_1_And_4_Func006Func002C = (): boolean => {


	if ( ( ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] < 7 ) ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] > 13 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Damage_Method_1_And_4_Func006C = (): boolean => {


	if ( ( ! Trig_Damage_Method_1_And_4_Func006Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Method_1_And_4_Actions = (): void => {

	udg_TempGroup2 = GetUnitsInRangeOfLocMatching( udg_ExplodeRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Damage_Method_1_And_4_Func001002003 ) );
	ForGroupBJ( udg_TempGroup2, Trig_Damage_Method_1_And_4_Func002A )
	DestroyGroup( udg_TempGroup2 )
	AddSpecialEffectLocBJ( udg_TempPoint2, udg_DamageSpecialEffect[ udg_LoopIndex ] )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )

	if ( ( Trig_Damage_Method_1_And_4_Func006C() ) ) {

		KillUnit( udg_Missile[ udg_LoopIndex ] )

	} else {

		TriggerExecute( gg_trg_After_Destination_Others )

	}


};


//===========================================================================
const InitTrig_Damage_Method_1_And_4 = (): void => {

	gg_trg_Damage_Method_1_And_4 = CreateTrigger();
	TriggerAddAction( gg_trg_Damage_Method_1_And_4, Trig_Damage_Method_1_And_4_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Damage_Method_1_And_4();
} );
